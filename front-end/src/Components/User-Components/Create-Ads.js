import { useNavigate } from "react-router-dom";
import { Center, Top, Logo } from "../../Styles/Authentication-style";
import { useState } from "react";
import { CreateService } from "../../Services/create-service";
import HeaderComponent from "../Header";

export default function CreateAd() {
  const [picture, setPicture] = useState();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [mark, setMark] = useState();
  const [year, setYear] = useState();
  const [description, setDescription] = useState();

  const getting = localStorage.getItem("infoToken");
  const stringfy = JSON.stringify(getting);
  const token = JSON.parse(stringfy);

  const navigate = useNavigate();

  function EnviarAnuncio(e) {
    e.preventDefault();

    const promise = CreateService(
      picture,
      name,
      price,
      mark,
      year,
      description,
      token
    );
    promise.then((res) => {
      navigate("/");
      alert("Anúncio Postado");
    });
    promise.catch((err) => {
      alert("Falha ao postar");
    });
  }

  return (
    <Center>
      <HeaderComponent />

      <Logo>
        <img
          src="https://uploaddeimagens.com.br/images/004/306/151/full/Web_%281%29.png?1674232212"
          alt="Logo do Web Cars"
        />
      </Logo>
      <form onSubmit={EnviarAnuncio}>
        <input
          placeholder="Link da foto do carro"
          value={picture}
          onChange={(e) => setPicture(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Nome do carro"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="price"
          placeholder="Valor no qual deseja vender"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Marca do carro"
          value={mark}
          onChange={(e) => setMark(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Ano de Fabricação"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">Postar</button>
      </form>
    </Center>
  );
}

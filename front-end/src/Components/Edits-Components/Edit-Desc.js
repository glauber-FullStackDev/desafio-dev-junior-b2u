import React, { useState } from "react";
import HeaderComponent from "../Header";
import { Center, Logo } from "../../Styles/Authentication-style";
import { useParams, useNavigate } from "react-router-dom";
import { EditDescService } from "../../Services/edits-service/edit-description";

export default function EditDesc() {
  const [description, setDesc] = useState();
  const getting = localStorage.getItem("infoToken");
  const stringfy = JSON.stringify(getting);
  const token = JSON.parse(stringfy);
  const navigate = useNavigate();
  const { id } = useParams();

  function Edit(e) {
    e.preventDefault();
    const promise = EditDescService(description, id, token);
    promise.then(() => {
      alert("Editado com sucesso!");
      navigate("/Meus-Anuncios");
    });
    promise.catch((err) => {
      alert("Falha ao editar.");
    });
  }

  return (
    <>
      <Center>
        <HeaderComponent />

        <Logo>
          <img src="https://uploaddeimagens.com.br/images/004/306/151/full/Web_%281%29.png?1674232212" />
        </Logo>

        <form onSubmit={Edit}>
          <input
            type="text"
            placeholder="Edite a marca"
            value={description}
            onChange={(e) => setDesc(e.target.value)}
            required
          />
          <button type="submit">Editar</button>
        </form>
      </Center>
    </>
  );
}

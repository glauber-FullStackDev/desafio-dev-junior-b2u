import React, { useState } from "react";
import HeaderComponent from "../Header";
import { Center, Logo } from "../../Styles/Authentication-style";
import { useParams, useNavigate  } from "react-router-dom";
import { EditYearService } from "../../Services/edits-service/edit-year";

export default function EditYear() {
  const [year, setYear] = useState();
  const getting = localStorage.getItem("infoToken");
  const stringfy = JSON.stringify(getting);
  const token = JSON.parse(stringfy);
  const navigate = useNavigate();
  const { id } = useParams();

  function Edit(e) {
    e.preventDefault();
    const promise = EditYearService(year, id, token);
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
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />
          <button type="submit">Editar</button>
        </form>
      </Center>
    </>
  );
}

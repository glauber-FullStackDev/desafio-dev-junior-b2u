import React from "react";
import { Cards } from "../../Styles/Home-Style";
import { AiOutlineEye, AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { DeleteAd } from "../../Services/delete-ad-service";

export default function UserProps(props) {
  const getting = localStorage.getItem("infoToken");
  const stringfy = JSON.stringify(getting);
  const token = JSON.parse(stringfy);
  const Navigate = useNavigate();
  const valor = parseInt(props.price);
  const correct = valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  function Delete(token, id) {
    if (window.confirm("Deseja apagar o seu anúncio?")) {
      const promise = DeleteAd(token, id);
      promise
        .then(() => {
          window.location.reload(true);
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <>
      <Cards>
        <img src={props.picture} />
        <h1>{props.name}</h1>
        <h2>{correct}</h2>

        <span>
          <div onClick={() => Navigate(`/Meu-Anuncio/${props.id}`)}>
            <p>Ver Mais</p>
            <AiOutlineEye />
          </div>
          <AiFillDelete onClick={() => Delete(token, props.id)} />
        </span>
      </Cards>
    </>
  );
}

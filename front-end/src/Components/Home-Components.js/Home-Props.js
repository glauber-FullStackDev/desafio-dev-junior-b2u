import React from "react";
import { ContainerCards, Cards } from "../../Styles/Home-Style";
import { AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function HomeProps(props) {
  const Navigate = useNavigate();
  const valor = parseInt(props.price);
  const correct = valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <>
      <Cards>
        <img src={props.picture} />
        <h1>{props.name}</h1>
        <h2>{correct}</h2>

        <div onClick={() => Navigate(`/Anuncio/${props.id}`)}>
          <p>Ver Mais</p>
          <AiOutlineEye />
        </div>
      </Cards>
    </>
  );
}

import React from "react";
import { Infos, Division } from "../../Styles/Ads-Details-style";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export default function DetailsPropsUser(props) {
  const valor = parseInt(props.price);
  const correct = valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  const navigate = useNavigate();

  return (
    <>
      <img src={props.picture} />
      <Infos>
        <button onClick={() => navigate(`/Edit/pic/${props.id}`)}>
          Editar Foto
        </button>
        <Division>
          <h1>{props.name}</h1>
          <HiOutlinePencilAlt
            onClick={() => navigate(`/Edit/name/${props.id}`)}
          />
        </Division>

        <Division>
          <h1>{correct}</h1>
          <HiOutlinePencilAlt
            onClick={() => navigate(`/Edit/price/${props.id}`)}
          />
        </Division>

        <Division>
          <p>Marca: {props.mark}</p>
          <HiOutlinePencilAlt
            onClick={() => navigate(`/Edit/mark/${props.id}`)}
          />
        </Division>

        <Division>
          <p>Ano de fabricação: {props.year}</p>
          <HiOutlinePencilAlt
            onClick={() => navigate(`/Edit/year/${props.id}`)}
          />
        </Division>

        <Division>
          <p>Descrição: {props.description}</p>
          <HiOutlinePencilAlt
            onClick={() => navigate(`/Edit/desc/${props.id}`)}
          />
        </Division>

        <h2>Formas de contato:</h2>
        <div>
          <h3>Email: {props.email}</h3>

          <span></span>

          <h3>Número de telefone: {props.number}</h3>
        </div>
      </Infos>
    </>
  );
}

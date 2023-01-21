import React from "react";
import { Infos } from "../../Styles/Ads-Details-style";

export default function DetailsProps(props) {

    const valor = parseInt(props.price);
    const correct = valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    return (
      <>
        <img src={props.picture} />
        <Infos>
            <h1>{props.name}</h1>
            <h1>{correct}</h1>
            <p>Marca: {props.mark}</p>
            <p>Ano de fabricação: {props.year}</p>
            <p>Descrição: {props.description}</p>
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
  
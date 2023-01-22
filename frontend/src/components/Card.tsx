import React from "react";
import Car from "../common/vehicle";
import { currencyFormat } from "../common/tools";
import "./Card.scss";

const Card = (props: Car) => {
  const price = currencyFormat(props.price!);
  return (
      <a className="card" href="">
        <img
          src={"https://loremflickr.com/320/240/cars?lock=" + props.cardId}
          alt="Car image"
        />
        {/* <div className="card-text"> */}
          <div className="card-info">
            <h1>{props.name}</h1>
            <h2>{props.brand}</h2>
            <h3>{props.description}</h3>
            <p>{props.year}</p>
            <p>{price}</p>
          </div>
          <div className="card-owner">
            <p>Anunciante: {props.owner}</p>
            <a href={"tel:" + props.phone}>Contato: {props.phone}</a>
            <a href={"mailto:" + props.email}>Email: {props.email}</a>
          </div>
        {/* </div> */}
        
      </a>
  );
};

export default Card;

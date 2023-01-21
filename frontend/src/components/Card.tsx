import React from "react";
import Car from "./common/car";
import { currencyFormat } from "../components/common/tools";
import "./Card.scss"

const Card = (props: Car) => {
  const price = currencyFormat(props.price!);
  return (
    <div className="card">
      <img
        src={"https://loremflickr.com/320/240/cars?lock=" + props.cardId}
        alt="Car image"
      />
      <div>
        <h1>{props.name}</h1>
        <h3>{props.description}</h3>
        <p>{props.year}</p>
        <p>{price}</p>
        <p>{props.owner}</p>
        <p>{props.phone}</p>
        <p>{props.email}</p>
      </div>
      
    </div>
  );
};

export default Card;

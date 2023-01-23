import React from "react";
import Vehicle from "../common/vehicle";
import { currencyFormat } from "../common/tools";
import "./Card.scss";

const Card = (props: Vehicle) => {
  const price = currencyFormat(props.price!);
  return (
      <a className="card" href={"/vehicle/" + props.id}>
        <img
          src={"https://loremflickr.com/320/240/cars?random=" + Math.floor(Math.random() * (1 - 1000 + 1) + 1)}
          alt="Car image"
        />
          <div className="card-info">
            <h1>{props.name}</h1>
            <h2>{props.brand}</h2>
            <h3>{props.description}</h3>
            <p>{props.year}</p>
            <p>{price}</p>
          </div>
        
      </a>
  );
};

export default Card;

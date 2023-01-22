import React from "react";
import Vehicle from "../common/vehicle";
import { currencyFormat } from "../common/tools";
import "./OwnerCard.scss";

const Card = (props: Vehicle) => {
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
        {/* </div> */}
        
      </a>
  );
};

export default Card;

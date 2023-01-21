import React from "react";
import styles from "./vehicleCard.module.css";

const VehicleCard = ({ item }) => {
  const handleDelete = () => {};
  const handleEdit = () => {};

  return (
    <div>
      <div>
        <img src="#" alt="alt descricao"></img>
      </div>
      <div>
        <div className="carInfo">
          <p>{item.name}</p>
          <p>{item.brand}</p>
          <p>{item.manufacturingYear}</p>
          <p>{item.description}</p>
        </div>
        <div className="ownerInfo"></div>
      </div>
      <div className={styles.buttonsDiv}>
        <button onClick={handleEdit}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png"
            alt=""
          />
        </button>
        <button onClick={handleDelete}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/7491/7491835.png"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default VehicleCard;

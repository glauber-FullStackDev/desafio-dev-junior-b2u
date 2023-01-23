import React from "react";
import VehicleCard from "./VehicleCard";
import styles from "./vehicleCard.module.css";

const VehicleList = ({ data, onRemove, filtered }) => {
  return (
    <div className={styles.vehicleListDiv}>
      {data && filtered.query.length === 0
        ? data.map((item) => {
          return (
            <div  key={item.id} style={{ marginBottom: "15px" }}>
                <VehicleCard item={item} onRemove={onRemove} />
              </div>
            );
          })
        : filtered.list.map((item) => {
            return (
              <div key={item.id} style={{ marginBottom: "15px", }}>
                <VehicleCard item={item} onRemove={onRemove} />
              </div>
            );
          })}
    </div>
  );
};

export default VehicleList;

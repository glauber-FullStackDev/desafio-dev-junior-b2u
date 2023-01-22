import React from "react";
import VehicleCard from "./VehicleCard";

const VehicleList = ({ data, onRemove, filtered }) => {
  return (
    <div>
      {data && filtered.query.length === 0
        ? data.map((item) => {
            return (
              <div
                key={item.id}
                style={{ border: "1px solid white", margin: "5px" }}
              >
                <VehicleCard item={item} onRemove={onRemove} />
              </div>
            );
          })
        : filtered.list.map((item) => {
            return (
              <div
                key={item.id}
                style={{ border: "1px solid white", margin: "5px" }}
              >
                <VehicleCard item={item} onRemove={onRemove} />
              </div>
            );
          })}
    </div>
  );
};

export default VehicleList;

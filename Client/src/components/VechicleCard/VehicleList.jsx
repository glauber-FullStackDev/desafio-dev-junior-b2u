import React, { useContext } from "react";
import Context from "../../context/Context";
import VehicleCard from "./VehicleCard";

const VehicleList = () => {
  const data = useContext(Context);
  return (
    <div>
      {data &&
        data.map((item) => {
          return (
            <div key={item.id} style={{ border: "1px solid white", margin: "5px" }}>
              <VehicleCard item={item} />
            </div>
          );
        })}
    </div>
  );
};

export default VehicleList;

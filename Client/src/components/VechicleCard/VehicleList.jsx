import React, { useContext, useState, useEffect } from "react";
import Context from "../../context/Context";
import VehicleCard from "./VehicleCard";

const VehicleList = () => {
  const { findAll } = useContext(Context);

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      setData(await findAll());
    };

    getData();
  }, []);

  const onRemove = (id) => {
    const result = data.filter((item) => item.id !== id);
    setData(result);
  }

  return (
    <div>
      {data &&
        data.map((item) => {
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

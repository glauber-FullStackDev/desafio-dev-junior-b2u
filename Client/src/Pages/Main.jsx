import React, { useContext, useEffect, useState } from "react";
import Context from "./../context/Context";
import Filter from "../components/Filter/Filter";
import VehicleList from "../components/VechicleCard/VehicleList";

const Main = () => {
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
  };

  const [filtered, setFiltered] = useState({
    query: "",
    list: [],
  });

  const handleFilter = (e) => {
    const results = data.filter((item) => {
      if (e.target.value === "") return data;
      return (
        item.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.brand.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });
    setFiltered({
      query: e.target.value,
      list: results,
    });
  };

  return (
    <div style={{height: "100%"}}>
      <Filter handleFilter={handleFilter} />
      <VehicleList
        data={data}
        handleFilter={handleFilter}
        filtered={filtered}
        onRemove={onRemove}
      />
    </div>
  );
};

export default Main;

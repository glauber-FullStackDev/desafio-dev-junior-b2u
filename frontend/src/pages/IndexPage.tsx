import { useEffect, useState } from "react";
import getData from "../common/pageData";
import Card from "../components/Card";
import User from "../common/user";
import Vehicle from "../common/vehicle";

const IndexPage = () => {

  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await (await getData(1, 1)).json();
      setVehicles(data.data);
    };
    fetchData();
  }, []);

  let vehiclesList;

  vehiclesList = vehicles.map((vehicle: Vehicle, index) => (
    <Card
      name={vehicle.name}
      brand={vehicle.brand}
      price={vehicle.price}
      year={vehicle.year}
      description={vehicle.description}
      owner={vehicle.User!.fullname}
      phone={vehicle.User!.phone}
      email={vehicle.User!.email}
      cardId={index.toString()}
      key={index}
    />
  ))

  return (
    <div className="container">
      <div className="content-page">
        <h1>Veículos</h1>
        <h2>Anúncios</h2>
        <div>
            { vehiclesList }
        </div>
        
      </div>
    </div>
  );
};

export default IndexPage;

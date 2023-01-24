import jwt_decode from "jwt-decode"
import {getData} from "../common/pageData"
import { useEffect, useState } from "react";
import Vehicle from "../common/vehicle";
import TitleBar from "../components/TitleBar";
import Card from "../components/Card";

const ListVehiclesPage = () => {

  const [vehicles, setVehicles] = useState([]);

  const userData = sessionStorage.getItem("user-data");
  const userId = JSON.parse(userData!).id;

  useEffect(() => {
    const fetchData = async () => {
      const data = await (await getData(1, 1, userId)).json();
      setVehicles(data.data.Vehicles);
    };
    fetchData();
  }, []);

  let vehiclesList;

  vehiclesList = vehicles.map((vehicle: Vehicle, index) => (
    <Card
      id={vehicle.id}
      name={vehicle.name}
      brand={vehicle.brand}
      price={vehicle.price}
      year={vehicle.year}
      description={vehicle.description}
      cardId={index.toString()}
      key={index}
      view="vehicle"
    />
  ))

  const result = getData(1,1);
  
  return (
    <div className='container'>
      <div className='content-page'>
        <TitleBar title="Seus anúncios" location="customer-list"/>
        {vehiclesList}
      </div>
    </div>
  )
}

export default ListVehiclesPage
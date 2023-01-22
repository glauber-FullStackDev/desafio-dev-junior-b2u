import jwt_decode from "jwt-decode"
import getData from "../common/pageData"
import { useEffect, useState } from "react";
import Vehicle from "../common/vehicle";
import OwnerCard from "../components/OwnerCard";
import Logout from "../components/Logout";

const ListVehiclesPage = () => {

  const [vehicles, setVehicles] = useState([]);

  const userData = sessionStorage.getItem("user-data");
  const userId = JSON.parse(userData!).id;

  useEffect(() => {
    const fetchData = async () => {
      const data = await (await getData(1, 1, userId)).json();
      console.log(data.data.Vehicles);
      
      setVehicles(data.data.Vehicles);
    };
    fetchData();
  }, []);

  let vehiclesList;

  vehiclesList = vehicles.map((vehicle: Vehicle, index) => (
    <OwnerCard
      name={vehicle.name}
      brand={vehicle.brand}
      price={vehicle.price}
      year={vehicle.year}
      description={vehicle.description}
      cardId={index.toString()}
      key={index}
    />
  ))


  const result = getData(1,1);
  
  return (
    <div className='container'>
      <div className='content-page'>
        <h1>Seus anúncios</h1>
        {vehiclesList}
      <Logout/>
      </div>
    </div>
  )
}

export default ListVehiclesPage
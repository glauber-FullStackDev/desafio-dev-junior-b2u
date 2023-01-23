import { useEffect, useState } from "react";
import {getData} from "../common/pageData";
import Card from "../components/Card";
import User from "../common/user";
import Vehicle from "../common/vehicle";
import { isAuthenticated } from "../common/auth";
import TitleBar from "../components/TitleBar";

const IndexPage = () => {

  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await (await getData(1, 1)).json();
      if(data){
        setVehicles(data.data);
      }
    };
    fetchData();
  }, []);

  let vehiclesList: any[] = vehicles;

  if(vehicles && vehicles.length > 0){
    vehiclesList = vehicles.map((vehicle: Vehicle, index) => (
      <Card
        id={vehicle.id}
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
  }

  let titleBar;

  if(!isAuthenticated()){
    titleBar = <TitleBar location="index-list" title="Veículos" subtitle="Anúncios" />
  } else {
    titleBar = <TitleBar location="customer-list" title="Veículos" subtitle="Anúncios" />
  }

  return (
    <div className="container">
      <div className="content-page">
        {titleBar}
        <div>
            { vehiclesList }
        </div>
        
      </div>
    </div>
  );
};

export default IndexPage;

import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import TitleBar from "../components/TitleBar";
import { Suspense, useEffect, useState } from "react";
import { getVehicleData } from "../common/pageData";
import { currencyFormat } from "../common/tools";
import Vehicle from "../common/vehicle";
import "./VehicleDetailPage.scss";
import User from "../common/user";
import { isAuthenticated } from "../common/auth";

const VahicleDetailPage = () => {
  const [vehicle, setVehicle] = useState<Vehicle>({});

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await (await getVehicleData(1, 1, id)).json();
      if (data) {
        setVehicle(data.data);
      }
    };
    fetchData();
  }, []);
  const user: User = { ...vehicle.User };

  const price = currencyFormat(vehicle.price!);

  let titleBar;

  if(isAuthenticated()){
    titleBar = <TitleBar location="customer-detail" title="Veículo" subtitle={vehicle.name} id={id}/>
  } else {
    titleBar = <TitleBar location="view-detail" title="Veículo" subtitle={vehicle.name} id={id}/>
  }

  return (
    <Layout>
      <section>
       <TitleBar location="view-detail" title="Veículo" subtitle={vehicle.name} id={id}/>
        <div className="detail">
          <img src={"https://loremflickr.com/320/240/cars"} alt="Car image" />
          <div className="info">
            <p>
              <strong>Marca: {vehicle.brand}</strong>
            </p>
            <p>Preço: {price}</p>
            <p>Ano: {vehicle.year}</p>
            <p>Descrição: {vehicle.description}</p>
            <p>Vendedor: {user.fullname}</p>
            <p>Telefone de contato: <a href={"tel:+55" + user.phone}>{user.phone}</a></p>
            <p>E-mail: <a href={"mailto:" + user.email}>{user.email}</a></p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VahicleDetailPage;

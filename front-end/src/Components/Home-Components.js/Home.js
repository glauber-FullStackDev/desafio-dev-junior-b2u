import React, { useEffect, useState } from "react";
import HeaderComponent from "../Header.js";
import HomeProps from "./Home-Props.js";
import { Ads } from "../../Services/home-service.js";
import {ContainerCards, ContainerHome } from "../../Styles/Home-Style.js";

export default function HomeComponent() {
  const getting = localStorage.getItem("infoToken");
  const stringfy = JSON.stringify(getting);
  const token = JSON.parse(stringfy);
  const [data, setData] = useState([]);
  const render =
    data.length !== 0 ? (
      data.map((item, index) => (
        <HomeProps
          key={index}
          id={item.id}
          picture={item.picture}
          name={item.name}
          price={item.price}
        />
      ))
    ) : (
      <p>Ainda não existem anúncios.</p>
    );

  useEffect(() => {
    const promise = Ads(token);
    promise
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <HeaderComponent />
      <ContainerHome>
        <ContainerCards>
          {token !== null ? render : (
              <p>Só usuários logados podem ver os melhores carros do Brasil!</p>
          )}
        </ContainerCards>
      </ContainerHome>
    </>
  );
}

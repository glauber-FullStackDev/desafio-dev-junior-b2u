import React, { useEffect, useState } from "react";
import HeaderComponent from "../Header.js";
import UserProps from "./User-ads-Props.js";
import { Container, ContainerCards, Title } from "../../Styles/Home-Style.js";
import { UserAds } from "../../Services/user-ads-service.js";

export default function UserAdComponent() {
  const getting = localStorage.getItem("infoToken");
  const stringfy = JSON.stringify(getting);
  const token = JSON.parse(stringfy);
  const [data, setData] = useState([]);
  const render =
    data.length !== 0 ? (
      data.map((item, index) => (
        <UserProps
          key={index}
          id={item.id}
          picture={item.picture}
          name={item.name}
          price={item.price}
        />
      ))
    ) : (
      <p>Anuncie Já!</p>
    );

  useEffect(() => {
    const promise = UserAds(token);
    promise
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <HeaderComponent />

      <Title>
        <h1>Meus Anúncios</h1>
      </Title>

      <Container>
        {token !== null ? (
          <ContainerCards>{render}</ContainerCards>
        ) : (
          <p>Conecte-se para ver seus anúncios</p>
        )}
      </Container>
    </>
  );
}

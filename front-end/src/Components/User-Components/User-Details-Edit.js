import HeaderComponent from "../Header";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AdsDetailsService } from "../../Services/details-service";
import { Container } from "../../Styles/Ads-Details-style";
import DetailsPropsUser from "./User-Details-Edit-Props";

export default function AdDetailsUser() {
  const [data, setData] = useState([]);
  const getting = localStorage.getItem("infoToken");
  const stringfy = JSON.stringify(getting);
  const token = JSON.parse(stringfy);
  const { id } = useParams();

  useEffect(() => {
    const promise = AdsDetailsService(token, id);
    promise
      .then((res) => {
        setData(res);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <HeaderComponent />

      <Container>
        {data.map((item, index) => (
          <DetailsPropsUser
            key={index}
            picture={item.picture}
            name={item.name}
            price={item.price}
            mark={item.mark}
            year={item.year}
            description={item.description}
            email={item.email}
            number={item.number}
            id={id}
          />
        ))}
      </Container>
    </>
  );
}

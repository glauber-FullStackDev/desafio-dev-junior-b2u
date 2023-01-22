import { useState } from "react";
import { api } from "../../services/api";
import { GetSchema } from "../../schemas/GetSchema";
import {
  Container,
  Main,
  BoxInput,
} from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ICar } from "../../@types";

export default function Cadaster() {
  const [data, setData] = useState({} as ICar);

  const cadaster = async () => {
    try {
      await GetSchema.validate(data);

      await api.post("/car", {
        nameCar: data.nameCar,
        brandCar: data.brandCar,
        year: data.year,
        description: data.description,
        owner: data.owner,
        email: data.email,
        phone: data.phone,
      });

      alert("Cadastrado com sucesso");

    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <Header />
      <Main>

        <Container>
          <div className="header">
            <h1 className="title">Cadastrar veículo</h1>
          </div>

          <form onSubmit={cadaster}>

            <BoxInput >
              <p className="title">Nome do carro</p>
              <Input
                value={data.nameCar}
                onChange={(value) => {
                  setData({
                    ...data,
                    nameCar: value.target.value,
                  });
                }}
              />
            </BoxInput>

            <BoxInput >
              <p className="title">Marca do carro</p>
              <Input
                value={data.brandCar}
                onChange={(value) => {
                  setData({
                    ...data,
                    brandCar: value.target.value,
                  });
                }}
              />
            </BoxInput>

            <BoxInput >
              <p className="title">Descrição do carro</p>
              <Input
                value={data.description}
                onChange={(value) => {
                  setData({
                    ...data,
                    description: value.target.value,
                  });
                }}
              />
            </BoxInput>

            <BoxInput >
              <p className="title">Ano do carro</p>
              <Input
                value={data.year}
                onChange={(value) => {
                  setData({
                    ...data,
                    year: value.target.value,
                  });
                }}
              />

            </BoxInput>

            <BoxInput >
              <p className="title">Seu nome</p>
              <Input
                value={data.owner}
                onChange={(value) => {
                  setData({
                    ...data,
                    owner: value.target.value,
                  });
                }}
              />
            </BoxInput>

            <BoxInput >
              <p className="title">E-mail</p>
              <Input
                value={data.email}
                type="email"
                onChange={(value) => {
                  setData({
                    ...data,
                    email: value.target.value,
                  });
                }}
              />
            </BoxInput>

            <BoxInput >
              <p className="title">Telefone para contato</p>
              <Input
                value={data.phone}
                onChange={(value) => {
                  setData({
                    ...data,
                    phone: value.target.value,
                  });
                }}
              />

            </BoxInput>
            
            <div className="boxButton">
              <Button type="submit">
                <p className="titleButton">Cadastrar</p>
              </Button>

            </div>

          </form>
        </Container>
      </Main>
      <Footer />
    </>

  )
}
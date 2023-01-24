import { ReactNode, useEffect, useState } from "react";
import * as S from "./styles";
import { api, deleteCar } from "../../services/axios";
import { Link } from "react-router-dom";

interface ReturnDados {
  id_car?: string;
  name_car?: string;
  brand?: string;
  year_of_manufacture?: number;
  description?: string;
  name?: string;
  email?: string;
  phone?: string;
  created_at?: Date;
  updated?: Date;
  children: ReactNode;
}

interface IdCardProps {
  state: { idState: string };
  setState: React.Dispatch<React.SetStateAction<{ idState: string }>>;
}

export const Card = ({ state, setState }: IdCardProps) => {
  const [dados, setDados] = useState<ReturnDados[]>([]);

  const fetchData = async () => {
    api.get("fetchAll").then((response) => setDados(response.data));
  };

  const handleSendId = async (e: any) => {
    const eventTarget = e.currentTarget;

    const containerCardId = eventTarget.parentNode.parentNode.id;

    setState({ idState: containerCardId });
  };
  const handleCripto = () =>{
    window.location.href = "../Metamask/index.jsx";
  }

  const handleDelete = async (e: any) => {
    const eventTarget = e.currentTarget;

    const containerCardId = eventTarget.parentNode.parentNode.id;
    console.log("id card: ", containerCardId);

    await deleteCar(containerCardId);
    location.reload();
  };

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 100);
  }, []);

  return (
    <>
      {dados.map((dado) => {
        return (
          <>
            <S.ContainerCard key={dado.id_car} id={dado.id_car}>
              <S.ContainerTitle>
                <S.Title>Carro: {dado.name_car} </S.Title>
                <img
                  src="https://source.unsplash.com/random/100x60/?carro"
                  alt=""
                />
              </S.ContainerTitle>

              <S.ContainerBox>
                <S.Title>Marca: {dado.brand}</S.Title>
                <S.TitleYear>
                  Ano de fabricação: {dado.year_of_manufacture}
                </S.TitleYear>
              </S.ContainerBox>

              <S.ContainerBox></S.ContainerBox>

              <S.ContainerBox>
                <S.Title>Dono: {dado.name}</S.Title>
              </S.ContainerBox>

              <S.ContainerBox>
                <S.Title>E-mail: {dado.email}</S.Title>
              </S.ContainerBox>
              <S.ContainerBox>
                <S.Title>Telefone: {dado.phone}</S.Title>
              </S.ContainerBox>

              <S.ContainerDescription>
                <span>Descrição:</span>
                <S.Description>{dado.description}</S.Description>
              </S.ContainerDescription>

              <S.ContainerButton>
                <button type="button" >
                <Link to={"/cripto"}>Pagar com cripto moeda</Link>
                </button>
                <button type="button" onClick={handleDelete}>
                  Excluir
                </button>
                <button type="button" onClick={handleSendId}>
                  <Link to={"/atualizar"}>Editar</Link>
                </button>
              </S.ContainerButton>
            </S.ContainerCard>
          </>
        );
      })}
    </>
  );
};

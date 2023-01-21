import React from "react";
import styled from "styled-components";
import CarDetailsModal from "./CarDetailsModal";

const CardStyles = styled.div`
  position: relative;
  width: 15rem;
  height: 20rem;
  background-color: #054caadc;
  color: white;
  border-radius: 0.7rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: 3px 2px 7px black;
  align-items: center;
  padding: 0.5rem 0;
  & img {
    max-width: 14rem;
    border-radius: 0.3rem;
  }
  & .delete {
    position: absolute;
    border-radius: 5rem;
    width: 2rem;
    height: 2rem;
    right: -0.7rem;
    top: -0.7rem;
    background-color: white;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 1px 1px 5px black;
    opacity: 40%;
    transition: opacity 50ms ease-in-out;
    &:hover {
      opacity: 100%;
    }
    & i {
      font-size: 1.3rem;
    }
  }
  & .edit-btn {
    position: absolute;
    left: 1rem;
    & i {
      cursor: pointer;
      opacity: 30%;
      transition: opacity 50ms ease-in-out;
      font-size: 1.3rem;
      &:hover {
        opacity: 100%;
      }
    }
  }
  & .detalhes {
    position: absolute;
    bottom: 2rem;
  }
`;

const Card = ({
  carro,
  deletarCarro,
  exibirCarroDetalhes,
  setShowCarEdition,
  setCarro,
}: any) => {
  return (
    <CardStyles>
      <div onClick={() => deletarCarro(carro.id)} className="delete">
        <i className="fa-solid fa-xmark"></i>
      </div>
      <div
        className="edit-btn"
        onClick={() => {
          setShowCarEdition(true);
          setCarro(carro);
        }}
      >
        <i className="fa-regular fa-pen-to-square"></i>
      </div>
      <label htmlFor="">{carro.marca}</label>
      <label htmlFor="">
        <b>{carro.nome}</b>
      </label>
      <img src={carro.imagem} alt="" />
      {!!carro.anoDeFabricacao && <p>Ano: {carro.anoDeFabricacao}</p>}

      <button
        onClick={() => exibirCarroDetalhes(carro)}
        className="details-btn"
      >
        Mais detalhes
      </button>
    </CardStyles>
  );
};

export default Card;

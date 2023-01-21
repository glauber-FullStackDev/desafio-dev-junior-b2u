import React, { useState } from "react";
import styled from "styled-components";
import { ICarro } from "./Service/Api";

const ModalStyle = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0%;
  left: 0%;
  width: 100vw;
  height: 100vh;
  & .shadow {
    position: absolute;
    background-color: #0000004e;
    width: 100vw;
    height: 100vh;
  }
  & form {
    display: flex;
    flex-direction: column;
    position: relative;
    border-radius: 1rem;
    padding: 2rem;
    /* justify-content: ce nter; */
    align-items: center;
    background-color: white;
    opacity: 100%;
    z-index: 3;
    width: 20rem;
    height: max-content;
    & .escape-btn {
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
    & .title {
      position: relative;
      font-weight: bold;
      font-size: 1.4rem;
      margin-top: -0.7rem;
      bottom: 5px;
      padding: 0.1rem 1rem;
      color: black;
    }
    & input {
      &#ano {
        width: 20%;
      }
    }
    & button {
      margin-top: 1rem;
      font-weight: bold;
      background-color: #ffe3ae;
      &:hover {
        background-color: #ee5e2a;
        color: white;
      }
    }
  }
  & .vendedor {
    display: flex;
    flex-direction: column;
    outline: 1px black solid;
    width: 20rem;
    align-items: center;
    /* justify-content: center; */
    padding: 0.5rem;
    & input {
      width: 90%;
    }
    & #telefone {
      width: 50%;
    }
  }
`;

const NewCarModal = ({ inserirCarro, setShowNewCar }: any) => {
  const [nome, setNome] = useState("");
  const [marca, setMarca] = useState("");
  const [ano, setAno] = useState(0);
  const [img, setImg] = useState("");
  const [desc, setDesc] = useState("");
  const [nomeVendedor, setNomeVendedor] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const newCar = {
    nome: nome,
    marca: marca,
    anoDeFabricacao: ano,
    desc: desc,
    imagem: img,
    proprietario: {
      nome: nomeVendedor,
      email: email,
      telefone: phone,
    },
  };

  return (
    <ModalStyle>
      <div className="shadow"></div>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          inserirCarro(newCar);
        }}
      >
        <div onClick={() => setShowNewCar(false)} className="escape-btn">
          <i className="fa-solid fa-xmark"></i>
        </div>
        <label className="title">Novo Carro</label>
        <label htmlFor="">Nome do Modelo</label>
        <input required onChange={(e) => setNome(e.target.value)} type="text" />
        <label htmlFor="marca">Nome da Marca</label>
        <input
          required
          onChange={(e) => setMarca(e.target.value)}
          id="marca"
          type="text"
        />
        <label>Ano de fabricação</label>
        <input
          required
          onChange={(e) => setAno(+e.target.value)}
          id="ano"
          min="1900"
          max="2099"
          step="1"
          type="number"
        />
        <label htmlFor="link">Link da imagem</label>
        <input
          required
          onChange={(e) => setImg(e.target.value)}
          type="text"
          id="link"
        />
        <label htmlFor="desc">Descrição</label>
        <textarea
          onChange={(e) => {
            console.log(e.target.value);
            setDesc(e.target.value);
          }}
          rows="5"
          cols="35"
          name=""
          style={{ resize: "none" }}
          id="desc"
        />
        <p>Dados do Vendedor:</p>
        <div className="vendedor">
          <label htmlFor="nome">Nome</label>
          <input
            onChange={(e) => setNomeVendedor(e.target.value)}
            id="nome"
            type="text"
          />
          <label htmlFor="email">E-mail</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name=""
            id="email"
          />
          <label htmlFor="telefone">Telefone</label>
          <input
            id="telefone"
            onChange={(e) => setPhone(e.target.value)}
            type="text"
          />
        </div>
        <button type="submit">Cadastrar!</button>
      </form>
    </ModalStyle>
  );
};

export default NewCarModal;

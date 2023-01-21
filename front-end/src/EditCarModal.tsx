import React, { useState } from "react";
import styled from "styled-components";

const EditModalStyles = styled.div`
  & .shadow {
    position: fixed;
    background-color: #0000004c;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
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
  & form {
    border-radius: 2rem;
    padding: 2rem 1rem;
    position: absolute;
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 1rem 2rem;
    z-index: 4;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    align-items: center;
    & input {
      width: 20rem;
    }
    & .carro-edited {
      margin-bottom: 2rem;
    }
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
    & .vendedor {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 60%;
      & input {
        width: 15rem;
      }
    }
    & button {
      position: relative;
      top: 7px;
      background-color: orangered;
      color: white;
    }
  }
`;

const EditCarModal = ({
  setCarroEdition,
  setShowCarEdition,
  carro,
  editarCarro,
}) => {
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
    <EditModalStyles>
      <div className="shadow"></div>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();

          editarCarro(carro.id, newCar);
        }}
      >
        <label className="title">Editar</label>
        <label className="carro-edited" htmlFor="">
          Veiculo:{" "}
          <strong>{`${!!carro?.marca ? carro?.marca : "Sem marca"} - ${
            !!carro?.nome ? carro?.nome : "Sem nome"
          } - ${
            !!carro.anoDeFabricacao ? carro.anoDeFabricacao : "Sem ano"
          }`}</strong>
        </label>
        <div onClick={() => setShowCarEdition(false)} className="escape-btn">
          <i className="fa-solid fa-xmark"></i>
        </div>
        <label htmlFor="">Nome do Modelo</label>
        <input onChange={(e) => setNome(e.target.value)} type="text" />
        <label htmlFor="marca">Nome da Marca</label>
        <input
          onChange={(e) => setMarca(e.target.value)}
          id="marca"
          type="text"
        />
        <label>Ano de fabricação</label>
        <input
          onChange={(e) => setAno(+e.target.value)}
          id="ano"
          min="1900"
          max="2099"
          step="1"
          type="number"
        />
        <label htmlFor="link">Link da imagem</label>
        <input onChange={(e) => setImg(e.target.value)} type="text" id="link" />
        <label htmlFor="desc">Descrição</label>
        <textarea
          onChange={(e) => {
            console.log(e.target.value);
            setDesc(e.target.value);
          }}
          rows="5"
          cols="35"
          name=""
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
          <input onChange={(e) => setPhone(e.target.value)} type="text" />
        </div>
        <button type="submit">Editar!</button>
      </form>
    </EditModalStyles>
  );
};

export default EditCarModal;

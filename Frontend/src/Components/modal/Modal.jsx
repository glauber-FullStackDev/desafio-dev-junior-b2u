import React from "react";

const BACKGROUND_STYLE = {
  position: "fixed",
  top: "0",
  bottom: "0",
  left: "0",
  right: "0",
  backgroundColor: "rgb(0,0,0, 0.7)",
  zIndex: "1000",
};

const Container = {
  position: "fixed",
  width: "30%",
  top: "40%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  padding: "150px",
  backgroundColor: "#fff",
  borderRadius: "10px",
  color: "black",
};
export default function Modal({ isOpen, setIsOpen, carro }) {
  console.log(carro);
  if (isOpen) {
    return (
      <div style={BACKGROUND_STYLE}>
        {carro?.map((data) => (
          <div style={Container}>
            <div key={data.id}>
              <h3>{data.nome_carro}</h3>
              <p>Marca: {data.marca}</p>
              <p>Ano Fabricação: {data.ano_fabrica}</p>
              <p>Descrição: {data.description}</p>
              <p>Proprietário: {data.proprietario}</p>
              <p>E-mail: {data.email}</p>
              <p>Telefone: {data.fone}</p>
            </div>
            <button onClick={setIsOpen}>Fechar</button>
          </div>
        ))}
      </div>
    );
  }
}

import React, { useState } from "react";
import API from "../../Services/API";

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

export default function ModalAddCar({ isOpen, setModalAdd }) {
  const [cars, setCars] = useState({
    nome_carro: "",
    marca: "",
    ano_fabrica: "",
    description: "",
    proprietario: "",
    email: "",
    fone: "",
  });

  const {
    nome_carro,
    marca,
    ano_fabrica,
    description,
    proprietario,
    email,
    fone,
  } = cars;

  const onValueChange = (e) => {
    setCars({ ...cars, [e.target.name]: e.target.value });
    console.log(cars);
  };

  const addCar = async (e) => {
    e.preventDefault();
    await API.post("/cadastrar", cars);
    alert("Cadastrado com sucesso!");
    window.location.reload(false);
  };

  if (isOpen) {
    return (
      <div style={BACKGROUND_STYLE}>
        <div style={Container}>
          <div className="mbsc-form-group">
            <div className="mbsc-form-group-title">Cadastrar Carro</div>
            <form method="POST" onSubmit={(e) => addCar(e)}>
              <input
                name="nome_carro"
                placeholder="Modelo"
                onChange={(e) => onValueChange(e)}
                value={nome_carro}
              />
              <input
                name="marca"
                placeholder="Marca"
                onChange={(e) => onValueChange(e)}
                value={marca}
              />
              <input
                name="ano_fabrica"
                placeholder="Fabricação"
                onChange={(e) => onValueChange(e)}
                value={ano_fabrica}
              />
              <input
                name="description"
                placeholder="Descrição"
                onChange={(e) => onValueChange(e)}
                value={description}
              />
              <input
                name="proprietario"
                placeholder="Proprietario do veiculo"
                onChange={(e) => onValueChange(e)}
                value={proprietario}
              />
              <input
                name="email"
                type="email"
                placeholder="email"
                onChange={(e) => onValueChange(e)}
                value={email}
              />
              <input
                name="fone"
                type="email"
                placeholder="Telefone"
                onChange={(e) => onValueChange(e)}
                value={fone}
              />
              <button type="submit">Cadastrar</button>
            </form>
          </div>
          <button onClick={setModalAdd}>Cancelar</button>
        </div>
      </div>
    );
  }
}

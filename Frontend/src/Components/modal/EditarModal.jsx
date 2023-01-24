import React, { useEffect, useState } from "react";
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

export default function EditarModal({ isOpen, setIsOpenEdit, carro }) {
  const [cars, setCars] = useState({
    nome_carro: "",
    marca: "",
    ano_fabrica: "",
    description: "",
    proprietario: "",
    email: "",
    fone: "",
  });
  const onValueChange = (e) => {
    setCars({ ...cars, [e.target.name]: e.target.value });
    console.log(cars);
  };

  const updateCars = async (e, data) => {
    e.preventDefault();
    console.log(data.id);
    await API.put(`/carros/${data.id}`, cars);
    alert("Atualizado com Sucesso!");
    window.location.reload(false);
  };

  if (isOpen) {
    return (
      <div style={BACKGROUND_STYLE}>
        <div style={Container}>
          <div className="">
            <div className="">Atualizar Carro</div>
            {carro?.map((data) => (
              <form
                key={data.id}
                method="PUT"
                onSubmit={(e) => updateCars(e, data)}
              >
                <input
                  type="text"
                  name="id"
                  placeholder="id"
                  onChange={(e) => onValueChange(e)}
                  value={data.id}
                />
                <input
                  name="nome_carro"
                  placeholder="Modelo"
                  onChange={(e) => onValueChange(e)}
                  defaultValue={data.nome_carro}
                />
                <input
                  name="marca"
                  placeholder="Marca"
                  onChange={(e) => onValueChange(e)}
                  defaultValue={data.marca}
                />
                <input
                  name="ano_fabrica"
                  placeholder="Fabricação"
                  onChange={(e) => onValueChange(e)}
                  defaultValue={data.ano_fabrica}
                />
                <input
                  name="description"
                  placeholder="Descrição"
                  onChange={(e) => onValueChange(e)}
                  value={data.description}
                />
                <input
                  name="proprietario"
                  placeholder="Proprietario do veiculo"
                  onChange={(e) => onValueChange(e)}
                  value={data.proprietario}
                />
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  onChange={(e) => onValueChange(e)}
                  value={data.email}
                />
                <input
                  name="fone"
                  type="email"
                  placeholder="Telefone"
                  onChange={(e) => onValueChange(e)}
                  value={data.fone}
                />
                <button type="submit">Salvar</button>
              </form>
            ))}
          </div>
          <button onClick={setIsOpenEdit}>Cancelar</button>
        </div>
      </div>
    );
  }
}

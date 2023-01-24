import React, { useEffect, useState } from "react";
import Modal from "./Components/modal/Modal";
import {
  CardsNewsContainer,
  Container,
  CardInfos,
  CardNews,
  Buttons,
} from "./Styled";
import API from "./Services/API";
import Navbar from "./Components/Header/Navbar";
import EditarModal from "./Components/modal/EditarModal";

function App() {
  const [data, setData] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpenEdit, setIsOpenEdit] = useState(false);

  const [carro, setCarro] = useState();

  const getAllCars = async () => {
    await API.get("/carros")
      .then((response) => setData(response.data))
      .catch((error) => console.log("error", error));
  };

  const getCarByID = async (carro) => {
    await API.get(`/carros/${carro}`)
      .then((response) => setCarro(response.data))
      .catch((error) => console.log("error", error));
  };

  const deleteCar = async (id) => {
    await API.delete(`/carros/${id}`);
    getAllCars();
  };

  const openModal = async (car) => {
    getCarByID(car);
    setIsOpen(true);
  };
  const openModaledit = async (car) => {
    getCarByID(car);
    setIsOpenEdit(true);
  };

  useEffect(() => {
    getAllCars();
  }, []);
  //   console.log(data);
  console.log(carro);

  return (
    <>
      <Navbar />
      <Container>
        <CardsNewsContainer>
          {data.map((carro) => (
            <CardNews key={carro.id}>
              <CardInfos>
                <h3>{carro.nome_carro.substring(0, 12)}</h3>
                <div>
                  <p>Marca: {carro.marca}</p>
                  <p>Ano Fabricação: {carro.ano_fabrica}</p>
                </div>
              </CardInfos>
              <Buttons>
                <button onClick={() => openModal(carro.id)}>Details</button>
                <button onClick={() => openModaledit(carro.id)}>Editar</button>
                <button onClick={() => deleteCar(carro.id)}>Excluir</button>
              </Buttons>
            </CardNews>
          ))}
          <Modal
            carro={carro}
            isOpen={modalIsOpen}
            setIsOpen={() => setIsOpen(!modalIsOpen)}
          ></Modal>

          <EditarModal
            carro={carro}
            isOpen={modalIsOpenEdit}
            setIsOpenEdit={() => setIsOpenEdit(!modalIsOpenEdit)}
          ></EditarModal>
        </CardsNewsContainer>
      </Container>
    </>
  );
}
export default App;

import { useEffect, useState } from "react";
import Modal from "react-modal";

import { api } from "../../services/api";

import { FaTrash } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ModalCar } from "../../components/ModalCar";

import { ICar } from "../../@types";

import {
  Container,
} from "./styles";

interface PropsItem extends ICar {
  id: string;
}

export default function Cars() {

  const [listCar, setListCar] = useState<ICar[]>([]);
  const [modalItem, setModalItem] = useState({} as PropsItem);
  const [visibleModal, setVisibleModal] = useState(false);

  const getData = async () => {

    const response = await api.get("/car");

    setListCar(response.data);
  }

  const deleteCar = async (id: string) => {
    try {
      await api.delete(`/car/?id=${id}`);

    } catch (error) {

      console.log(error);
    }

  }

  const handleOpenModal = (data: PropsItem) => {
    setModalItem(data);
    setVisibleModal(true);
  }

  const handleCloseModal = () => {
    setVisibleModal(false);
  }

  useEffect(() => {
    getData();
  }, [listCar])

  Modal.setAppElement('#root');

  return (
    <>
      <Header />

      <Container>

        <p className="cars">Carros em vendas</p>

        <div className="list-cars">

          {listCar.map((data) => {
            return (
              <div className="container-cars">
                <div className="boxIcons">
                  <FaTrash className="icon" onClick={() => deleteCar(data?.id)} />
                  <CiEdit color="#fff" size={25} onClick={() => handleOpenModal(data)} />
                </div>

                <p>Nome do carro: {data?.nameCar}</p>
                <p>Descrição: {data?.description}</p>
                <p>Marca: {data?.brandCar}</p>
                <p>Ano: {data?.year}</p>

                <div className="borda"></div>

                <h3>Contato</h3>
                <p>Nome do dono: {data?.owner}</p>
                <p>E-mail: {data?.owner}</p>
                <p>Telefone: {data?.owner}</p>


              </div>
            )
          })}
        </div>


      </Container>

      {visibleModal && (
        <ModalCar
          data={modalItem}
          handleCloseModal={handleCloseModal}
          visible={visibleModal}
        />
      )}

      <Footer />

    </>

  )
}
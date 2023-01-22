import { useState } from "react";
import Modal from "react-modal";
import { ICar } from "../../@types"

import { FiX } from "react-icons/fi";

import { Input } from "../Input";
import { Button } from "../Button";

import { api } from "../../services/api";


import {
  BoxInput,
  Container,
} from "./styles"

interface PropsItem extends ICar {
  id: string

}

interface Props {
  data: PropsItem;
  visible: boolean;
  handleCloseModal(): void;
}

export function ModalCar({ data, handleCloseModal, visible }: Props) {
  const [dataCar, setDataCar] = useState({
    nameCar: data.nameCar,
    description: data.description,
    year: data.year,
    owner: data.owner,
    brandCar: data.brandCar,
    email: data.email,
    id: data.id,
    phone: data.phone,

  } as ICar);

  const boxStyle = {
    content: {
      width: '50%',
      height: '50%',
      top: '50%',
      bottom: 'auto',
      left: '50%',
      right: 'auto',
      padding: '30px',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#18191a',
    }
  }


  const editCar = async () => {
    try {

    await api.put("/car", {
      id: dataCar.id,
      nameCar: dataCar.nameCar,
      brandCar: dataCar.brandCar,
      year: dataCar.year,
      description: dataCar.description,
      owner: dataCar.owner,
      email: dataCar.email,
      phone: dataCar.phone
    });

  } catch (error) {

    console.log(error);
  }

}

  return (
    <Modal
      isOpen={visible}
      onRequestClose={handleCloseModal}
      style={boxStyle}
    >

      <button
        type="button"
        onClick={handleCloseModal}
        className="react-modal-close"
        style={{
          background: 'transparent',
          border: 0,
        }}
      >
        <FiX size={45} color="red" />

      </button>

      <Container>
        <div className="boxModal">
          <h2>Atualizar detalhes do carro</h2>


          <form onSubmit={editCar}>

            <BoxInput >
              <p className="title">Nome do carro</p>
              <Input
                value={dataCar.nameCar}
                onChange={(value) => {
                  setDataCar({
                    ...data,
                    nameCar: value.target.value,
                  });
                }}
              />
            </BoxInput>

            <BoxInput >
              <p className="title">Marca do carro</p>
              <Input
                value={dataCar.brandCar}
                onChange={(value) => {
                  setDataCar({
                    ...data,
                    brandCar: value.target.value,
                  });
                }}
              />
            </BoxInput>

            <BoxInput >
              <p className="title">Descrição do carro</p>
              <Input
                value={dataCar.description}
                onChange={(value) => {
                  setDataCar({
                    ...data,
                    description: value.target.value,
                  });
                }}

              />
            </BoxInput>

            <BoxInput >
              <p className="title">Ano do carro</p>
              <Input
                value={dataCar.year}
                onChange={(value) => {
                  setDataCar({
                    ...data,
                    year: value.target.value,
                  });
                }}


              />

            </BoxInput>

            <BoxInput >
              <p className="title">Seu nome</p>
              <Input
                value={dataCar.owner}
                onChange={(value) => {
                  setDataCar({
                    ...data,
                    owner: value.target.value,
                  });
                }}
              />
            </BoxInput>

            <BoxInput >
              <p className="title">E-mail</p>
              <Input
                value={dataCar.email}
                onChange={(value) => {
                  setDataCar({
                    ...data,
                    email: value.target.value,
                  });
                }}


              />
            </BoxInput>

            <BoxInput >
              <p className="title">Telefone para contato</p>
              <Input
                value={dataCar.phone}
                onChange={(value) => {
                  setDataCar({
                    ...data,
                    phone: value.target.value,
                  });
                }}

              />

            </BoxInput>

            <div className="boxButton">
              <Button type="submit">
                <p className="titleButton">Editar</p>
              </Button>

            </div>

          </form>
        </div>

      </Container>

    </Modal>
  )

}
import styled from "styled-components";
import { ICarro } from "./Service/Api";

const CarDetailsModal = ({ carro, setShowCarDetails }): any => {
  const ModalDetailsStyles = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    & .shadow {
      position: fixed;
      width: 100vw;
      height: 100vh;
      background-color: #00000036;
      top: 0;
      left: 0;
    }
    & .modal {
      position: absolute;
      display: flex;
      background-color: white;
      top: 50%;
      transform: translateY(-50%);
      padding: 2rem;
      gap: 3rem;
    }
    & .carro-details {
      display: flex;
      flex-direction: column;
    }
    & .vendedor-details {
      display: flex;
      gap: 1rem;
      flex-direction: column;
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
    & img {
      width: max-content;
      height: 200px;
    }
  `;
  return (
    <ModalDetailsStyles>
      <div className="shadow"></div>
      <div className="modal">
        <div onClick={() => setShowCarDetails(false)} className="escape-btn">
          {" "}
          <i className="fa-solid fa-xmark"></i>
        </div>
        <img src={carro.imagem} alt="" />
        <div className="carro-details">
          <label htmlFor="">
            ID: <strong>{carro.id}</strong>
          </label>
          <label htmlFor="">
            <strong>{carro.nome}</strong>
          </label>
          <label htmlFor="">
            <strong>{carro.marca}</strong>
          </label>
          <label htmlFor="">
            Ano: <strong>{carro.anoDeFabricacao}</strong>
          </label>
          <p>
            Descrição: <br /> {carro.desc ? carro.desc : "Sem descrição"}
          </p>
        </div>
        <div className="vendedor-details">
          <label htmlFor="">
            <strong>Proprietário:</strong>
          </label>
          <label htmlFor="">{carro.proprietario.nome}</label>
          <label htmlFor="">{carro.proprietario.email}</label>
          <label htmlFor="">{carro.proprietario.telefone}</label>
        </div>
      </div>
    </ModalDetailsStyles>
  );
};

export default CarDetailsModal;

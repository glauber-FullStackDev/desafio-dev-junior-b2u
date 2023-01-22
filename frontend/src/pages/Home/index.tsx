import { Link } from "react-router-dom";

import LogoCar from "../../assets/car.png";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import {
  Container,
  Main
} from "./styles";

export default function Home() {

  return (
    <>
    <Header />
      <Main>
        <Container>
          <div className="boxCopy">

            <h1 className="title">Anuncie seu carro!</h1>
            <h1 className="subTitle">Rápido & Prático</h1>

          

            <button className="button">
              <Link to={"/cadaster"} className="titleLink">Anunciar carro</Link>
            </button>

          </div>

          <div className="boxCar">
            <img src={LogoCar} alt="Imagem do carro vermelho" className="carBanner" />
          </div>

        </Container>
      </Main>
    <Footer />

    </>
  )
}
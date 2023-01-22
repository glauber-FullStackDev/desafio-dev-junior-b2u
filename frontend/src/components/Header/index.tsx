import { Link } from "react-router-dom";
import Logo from "../../assets/anuncieja.svg";


import {
  Container,
} from "./styles";

export function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={Logo} alt="Logo do carro" className="logo" />
      </Link>

      <nav>
        <Link to="/" className="titleNav">Início</Link>
        <Link to="/cars" className="titleNav">Carros</Link>
        <Link to="/cadaster" className="titleNav">Cadastro</Link>
      </nav>

    </Container>
  )
}
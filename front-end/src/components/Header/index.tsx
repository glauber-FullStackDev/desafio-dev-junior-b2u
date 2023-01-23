import * as S from "./styles";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <S.ContainerNav>
      <S.Title>
        <h2>Venda de automóveis</h2>
      </S.Title>
      <S.Link>
        <h2><Link to={"/"}>Visualizar veículos</Link></h2>
      </S.Link>
      <S.Link>
        <h2><Link to={"/cadastrar"}>Cadastrar</Link></h2>
      </S.Link>
    </S.ContainerNav>
  );
};

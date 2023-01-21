import styled from "styled-components";
import React from "react";

const DivHeader = styled.div`
  /* width: 100%; */
  height: 60px;
  background-color: #0940b8;
  display: flex;
  align-items: center;
  padding: 0 1rem;

  & .titulo {
    color: white;
    font-weight: bold;
    font-size: 1.45rem;
    background: linear-gradient(130deg, #ffffff, black);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }

  & nav {
    position: relative;
    display: flex;
    gap: 1.5rem;
    left: 1030px;
    & a {
      background-color: #0940b8;
      color: white;
      padding: 0.5rem;
    }
  }
`;

const Header = () => {
  return (
    <DivHeader>
      <label className="titulo">AutoCars</label>
      <nav>
        <a href="#">Sobre nós</a>
        <a href="#">Contato</a>
      </nav>
    </DivHeader>
  );
};

export default Header;

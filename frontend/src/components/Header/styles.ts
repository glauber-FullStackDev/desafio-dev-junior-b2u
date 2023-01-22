import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  background-color: #18191a;

  padding: 0 80px;


  .logo{
    width: 140px;
    height: auto;
  
  }

  nav {
    display: flex;
    gap: 50px;
    font-size: 19px;
  }

  .titleNav{
    color: #fff;
    font-weight: 500;
    font-family: 'Roboto';

    &:hover {
      color: #DB2423;
      transition: 200ms ease-in;
  }

  }

`;
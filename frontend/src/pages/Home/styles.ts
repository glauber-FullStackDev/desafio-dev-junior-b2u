import styled from 'styled-components';

export const Container = styled.main`

  width: 100%;
  height: 100%;


  display: flex;
  justify-content: center;
  align-items: center;

  .carBanner{
    width: 100%;
    height: 100%;

  }

  .boxCar{
    width: 90%;
    padding-top: 10%;

  }

  .boxCopy {
    display: flex;
    flex-direction: column;

    width: 900px;
  }

  .title {
    font-size: 50px;
    color: #cdc9c3;
    font-family: 'Roboto';
    font-weight: 600;
  }

  .subTitle {
    font-size: 30px;
    color: #9b9386;
    margin-top: 10px;
    font-family: 'Roboto';

  }

  .button {
    width: 100px;
    height: 50px;

    margin-top: 20px;

    border-radius: 20px;
    background-color: transparent;

    font-size: 10px;
    color: #fff;
    border: 1px solid #cdc9c3;

    &:hover {
      background-color: #DB2423;
      color: #fff;
      border: none; 
      transition: 500ms ease-in;
  }

  .titleLink{
    font-size: 17;
    color: #cdc9c3;
    font-family: 'Roboto';
    font-weight: 600;
  }



  }

`;


export const Main = styled.main`
  margin: auto;
  width: 50%;
`;


export const Teste = styled.input`
  margin: auto;
  width: 50%;


  ::placeholder{
    
  }

  :hover{

  }

  >div{ 

  }

`;




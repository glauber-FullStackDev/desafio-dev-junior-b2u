import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 680px;

  margin-top: 5%;

  background-color: #18191a;

  .header{
    width: 100%;
    display: flex;
    justify-content: center
 }

 .title{
    font-size: 30px;
    color: #cdc9c3;
    font-family: 'Roboto';
    font-weight: 600;
    margin-top: 10px;

 }

 .boxButton {
   margin-top: 20px;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
 }

 .titleButton {
    font-size: 18px;
    color: #cdc9c3;
    font-family: 'Roboto';
    font-weight: 600;
  }

`;

export const Main = styled.main`
  margin: auto;
  width: 50%;
`;

export const BoxInput = styled.div`
  
  margin-left: 5%;
  flex-direction: column;
  height: 70px;

  .title{
    font-size: 15px;
    color: #cdc9c3;
    font-family: 'Roboto';
    font-weight: 200;
  }
`;



import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 150px;

  img {
    max-width: 450px;
    max-height: 400px;
    border-radius: 10px;
    box-shadow: 1px 1px 5px 1px rgba(0.2, 1, 0.2, 0.2);
  }
`;


export const Infos = styled.div`
  width: 600px;
  max-height: 600px;
  border-radius: 10px;
  background-color: #F3F5F8;
  box-shadow: 1px 1px 5px 1px rgba(0.2, 1, 0.2, 0.2);
  margin-bottom: 20px;

  h1 {
    font-family: "Poppins", sans-serif;
    padding-left: 15px;
  }

  h2 {
    font-family: "Poppins", sans-serif;
    padding-left: 15px;
    font-size: 20px;
    font-weight: 600;
  }

  h3 {
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-weight: 600;
    padding-left: 15px;
  }

  p {
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    font-weight: 400;
    padding-left: 15px;
  }
  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  span {
    border: 1px solid black;
    height: 60px;
  }

  button {
    height: 58px;
    background-color: red;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
    border: none;
    border-radius: 5px;
    margin-top: 13px;
    color: #fff;
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 460px;
    cursor: pointer;
  }
`;

export const Division = styled.div`

display: flex;
width: 100%;
justify-content: space-around;

svg {
  height: 24px;
  width: 24px;
  cursor: pointer;
}

`

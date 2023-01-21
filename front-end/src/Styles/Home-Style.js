import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

  p {
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    font-weight: 400;
  }
`;

export const ContainerHome = styled.div`
 display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 180px;

  p {
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    font-weight: 400;
  }

`

export const ContainerCards = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 1100px;
`;

export const Cards = styled.div`
  max-height: 375px;
  max-width: 250px;
  margin-top: 25px;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 1px 1px 5px 1px rgba(0.2, 1, 0.2, 0.2);

  img {
    width: 249px;
    height: 186px;
    border-radius: 5px;
  }

  h1 {
    padding-left: 13px;
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    font-weight: 400;
  }

  h2 {
    padding-left: 13px;
    font-family: "Poppins", sans-serif;
    font-size: 24px;
    font-weight: 600;
  }

  div {
    border: 1px solid #e6e6e5;
    border-radius: 5px;
    width: 140px;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    transition: all ease-in-out 0.3s;
    box-shadow: 1px 1px 5px 1px rgba(0.2, 1, 0.2, 0.2);
    margin-left: 5px;
  }

  span {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  div:hover {
    background-color: red;
    color: #fff;
    cursor: pointer;
  }

  p {
    padding-left: 13px;
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    font-weight: 400;
  }

  svg {
    height: 25px;
    width: 25px;
    cursor: pointer;
  }
`;

export const Title = styled.div`
  margin-top: 180px;

  h1 {
    padding-left: 35px;
    font-family: "Poppins", sans-serif;
    font-size: 24px;
    font-weight: 600;
  }
`;

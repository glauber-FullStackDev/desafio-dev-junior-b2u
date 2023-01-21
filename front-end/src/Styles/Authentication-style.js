import styled from 'styled-components';

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 35px;

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  input {
    height: 58px;
    width: 300px;
    margin-bottom: 13px;
    margin-top: 5px;
    border-radius: 5px;
    outline: none;
    border: none;
    font-size: 20px;
    padding-left: 15px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
  }

  button {
    width: 320px;
    height: 58px;
    background-color: red;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
    border: none;
    border-radius: 5px;
    margin-top: 13px;
    color: #fff;
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  h2 {
    color: black;
    font-weight: 600;
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    padding-top: 30px;
    text-decoration: none;
  }

  h2:hover {
    color: red;
  }

  a {
    text-decoration: none;
  }
`;
export const Logo = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 300px;
    height: 300px;
  }
`;

export const Top = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 30px;

  div {
    max-height: 33px;
    max-height: 33px;
    border: solid 2px #000;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-left: 15px;
  }

  svg {
    font-size: 33px;
    cursor: pointer;
  }
`;
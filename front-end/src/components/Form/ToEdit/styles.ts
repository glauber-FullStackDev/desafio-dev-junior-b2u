import styled from "styled-components";

export const ContainerForm = styled.form`
  display: flex;

  width: 400px;
  height: 400%;

  margin: 40px auto;

  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  border: 1px solid blue;
  border-radius: 18px;
  background-color: ${(props) => props.theme["gray-700"]};
`;
export const ContainerTitle = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 0;
`;

export const ContainerBox = styled.div`
  display: flex;
  width: 100%;
  height: 30%;
  padding: 5px;
  gap: 5px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: transparent;
`;
export const Title = styled.span`
  align-items: center;
  justify-content: left;
`;

export const Input = styled.input`
  display: flex;
  width: 50% !important;
  height: 20px;

  background-color: ${(props) => props.theme["gray-900"]};

  border-radius: 4px;
  border: solid 1px #b5935299;

  padding: 15px 14px;
  color: #b5935299;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;

  letter-spacing: -0.023em;

  margin-bottom: 20px;

  :hover {
    background: linear-gradient(87.25deg, #b59352 0.34%, #ffde9d 109.42%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    border: solid 1px #ffde9d;
  }

  &::placeholder {
    color: #b5935299;
    font-family: "Montserrat";
  }

  @media (min-width: 768px) {
    margin-bottom: 0px;
    width: 77% !important;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  width: 75%;
  margin: 15px 0 0 2px;
  align-items: center;
  border-radius: 22px;

  justify-content: center;

  button {
    margin-bottom: 10px;
    border-radius: 12px;
    padding: 5px;
    justify-content: center;
    align-items: center;
  }
`;

export const Success = styled.span`
  margin: 5px;

  color: ${(props) => props.theme["green-700"]};
`;
export const Error = styled.span`
  margin: 5px;
  color: ${(props) => props.theme["red-300"]};
`;

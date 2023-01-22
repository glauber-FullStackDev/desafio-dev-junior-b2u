import styled from "styled-components";

export const ContainerCard = styled.div`
  display: flex;

  width: 400px;

  padding: 5px;

  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid blue;
  border-radius: 18px;
  background-color: ${(props) => props.theme["gray-700"]};
`;
export const ContainerTitle = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  padding: 5px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  justify-content: space-around;
  border-radius: 22px;
  margin: 10px;
  background-color: ${(props) => props.theme["gray-500"]};
`;
export const Box = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;

  background-color: ${(props) => props.theme["gray-700"]};
`;
export const ContainerBox = styled.div`
  display: flex;
  width: 100%;
  height: 30%;
  padding: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
export const Title = styled.span`
  display: flex;

  align-items: center;
  justify-content: left;
`;
export const TitleYear = styled.div`
  display: flex;

  align-items: center;
  justify-content: left;
` ;
export const ContainerDescription = styled.div`
  display: flex;
  width: 350px;
  height: 100%;
  padding: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Description = styled.p`
  display: flex;
  white-space: normal;
`;

export const ContainerButton = styled.div`
  display: flex;
  width: 100%;
  height: 30%;
  padding: 5px;
  flex-direction: row;
  align-items: center;
  border-radius: 22px;
  margin: 10px;
  padding: 10px;
  justify-content: space-around;
  background-color: ${(props) => props.theme["gray-800"]};

  button {
    border-radius: 12px;
    padding: 5px;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;

  padding-top: 30px;
`;
export const ContainerBox = styled.div`
  display: flex;

  width: 500px;
  height: 100%;
  margin: auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme["gray-300"]};
`;

export const ContainerTitle = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme["gray-900"]};
`;
export const Title = styled.span`
  align-items: center;
  justify-content: left;
  margin: 10px;
/*   p{
color: yellow;
color: ${(props) => props.theme["red-700"]};
} */
`;
export const Box = styled.div`
  display: flex;
  width: 100%;
  height: 150px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 15px;
  background-color: ${(props) => props.theme["gray-700"]};

  h5 {
    width: 100%;
    height: 60px;
    padding: 5px;
    justify-content: space-between;
    text-align: center;
    p {
      font-size: 18px;
      margin: 5px;
    }
    div {
      margin: 10px;
    }
  }
  h4 {
    width: 100%;
    margin: 20px;
    padding: 5px;

    text-align: center;
    div {
      margin: 0;
      span {
        margin: 10px;
        color: black;
      }
    }
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  width: 100%;
  height: 30%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 10px;
  padding: 10px;
  background-color: ${(props) => props.theme["gray-700"]};
  button {
    border-radius: 12px;
    padding: 5px;
    font-size: 12px;
    a {
      color: ${(props) => props.theme["gray-900"]};

      text-decoration: none;
    }
  }
`;

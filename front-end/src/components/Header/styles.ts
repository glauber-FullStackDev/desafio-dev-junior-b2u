import styled from "styled-components";

export const ContainerNav = styled.div`
  display: flex;

  width: 100%;
  height: 50px;

  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme["gray-800"]};
`;
export const Title = styled.div`
  display: flex;
  width: 30%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
export const Link = styled.div`
  display: flex;
  width: 30%;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  h2 > a {
    color: ${(props) => props.theme["gray-100"]};
    text-decoration: none;
  }
`;

import styled from "styled-components";

export const Container = styled.section`
  width: 1100px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 800px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ButtonClose = styled.button`
  border: none;
  padding: 0.8em;
  border-radius: 5px;
  cursor: pointer;
  transition: all ease 0.2s;

  background: #000000;
  color: #ffffff;

  &:hover {
    color: #c7a85f;
  }
`;

export const ContainerForm = styled.form`
  width: 50%;
  padding: 3em;
  background-color: #ffffff;
  border-radius: 10px;
`;

export const WrapperClose = styled(Wrapper)`
  justify-content: center;
  margin-top: 2em;

  > button {
    width: 100%;
  }
`;

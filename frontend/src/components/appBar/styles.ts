import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 1em;
  padding-right: 2em;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: #cfcfcf;
`;

export const Buttom = styled.button`
  border: none;
  background: #000000;
  padding: 0.7em;
  border-radius: 5px;
  cursor: pointer;
  color: #ffffff;

  transition: all ease 0.2s;

  &:hover {
    color: #c7a85f;
  }
`;

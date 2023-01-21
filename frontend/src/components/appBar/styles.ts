import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #CFCFCF;
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
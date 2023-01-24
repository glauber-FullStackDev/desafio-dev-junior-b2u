import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80%;

    padding: 12px 40px;

`;

export const Caixa = styled.div`
    height: 40%;
    width: 40%;
    display: flex;
    flex-direction: column;

    >p {
        margin-top: 8px;
        color: #434343;
    }

`;

export const ButtonAction = styled(NavLink)`
    margin-top: 8px;
    padding-top: 16px;

    background-color: #434343;
    
    height: 60px;
    width: 300px;

    color: #ffffff;
    font-size: 16px;
    text-decoration: none;
    text-align: center;

    &:hover {
        background-color: #003D76; 
    }
`;

 /*    font-size: ${props => props.fontSize ? props.fontSize = '36px' : '25px'}*/
export const CaixaTexto = styled.div`
    
    width: 80%;

    >p {
        font-weight: bold;
        font-size: 32px;
        color: #003D76;
    }

`;

export const CaixaImg = styled.div`
    height: 60%;
    width: 50%;

    > img {
        width: 100%;
        height: 100%;
    }

`;





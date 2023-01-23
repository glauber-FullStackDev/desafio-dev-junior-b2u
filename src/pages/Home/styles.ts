import styled from 'styled-components';
//import imagem from '../../img/compra.jpg';

export const Container = styled.div`
    display: flex;
    align-items: center;
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

export const ButtonAction = styled.button`
    margin-top: 8px;
    background-color: #434343;
    font-size: 16px;
    color: #ffffff;
    padding: 8px;
    height: 60px;
    width: 300px;

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
    height: 40%;
    width: 40%;

`;

export const Imagem = styled.div`

    /*background-image: url(});*/

`;



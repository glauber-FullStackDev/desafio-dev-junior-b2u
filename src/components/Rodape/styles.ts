import styled from "styled-components";
import { Car } from "@styled-icons/boxicons-regular/Car"
import { Facebook, Instagram, Whatsapp, Twitter } from '@styled-icons/boxicons-logos/'


export const Container = styled.footer`
    justify-content: space-between ;
    display:  flex;
    align-items: center;

    height: 80px;

    padding: 16px 16px;
    
    background-color: #434343;
`;

export const Caixa = styled.div`
    display: flex;
    align-items: center;

    >p {
        font-size: 28px;
        color: #ffffff;
        font-weight: bold;
    }
`;


export const CaixaDeIcone = styled.div`
    display: flex;
    align-items: center;

`;

export const LogoCar = styled(Car)`
    width: 24px;
    height: 36px;
    color: #ffffff;
`;

export const LogoWhat = styled(Whatsapp)`
    width: 24px;
    height: 32px;
    color: #ffffff;
`;

export const LogoFace = styled(Facebook)`
    width: 24px;
    height: 32px;
    color: #ffffff;
`;

export const LogoInsta = styled(Instagram)`
    width: 24px;
    height: 32px;
    color: #ffffff;
`;

export const LogoTwitter = styled(Twitter)`
    width: 24px;
    height: 32px;
    color: #ffffff;
`;
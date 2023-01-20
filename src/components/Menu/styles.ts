import styled from "styled-components"
import { Car } from "@styled-icons/boxicons-regular/Car"
import { Whatsapp } from '@styled-icons/boxicons-logos/Whatsapp'

export const Cabecalho = styled.header`
    display: flex;   
    align-items: center;
    justify-content: space-between;
    padding: 20px 20px;
    border-bottom: 2px solid #434343;

`;

export const Titulo = styled.h1`
    font-size: 20px;
    color: #010101;
`;

export const Logo = styled.div`
    width: 200px;
    display: flex;
    align-items: center;
`;

export const CarIcon = styled(Car)`
    color: #003d76;
    width: 25px;
    height: 25px;
`;

export const Navbar = styled.nav`
    display: flex;
    align-items: center;
    width: 23%;
    > li {
        text-align: center;
        margin-right: 8px;
        list-style: none;
        font-size: 16px;
        cursor: pointer;

        &:hover {
            color: #003d76;;
        }
    }
    
`;

export const LogoWhat = styled(Whatsapp)`
    width: 24px;
    height: 24px;
    color: #003d76;


`;

export const Caixa = styled.div`
    

    display: flex;
    align-items: center;

    width: 16%;

    >p {
        font-size: 24px;
    }

`;
import styled from "styled-components"
import { Car } from "@styled-icons/boxicons-regular/Car"
import { User } from "@styled-icons/boxicons-regular/User"
import { Exit } from '@styled-icons/boxicons-regular/Exit'
import { NavLink } from "react-router-dom";

export const Cabecalho = styled.header`
    display: flex;   
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
    border-bottom: 2px solid #434343;

`;

export const Titulo = styled.h1`
    font-size: 20px;
    font-weight: bold;
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
    width: 30%;

    > li {
        text-align: center;
        list-style: none;
        font-size: 16px;
        color: #003D76;
        cursor: pointer;

        &:hover {
            color: #434343;;
        }
    }
    
`;


export const ItemLink = styled(NavLink)`

    text-align: center;
    margin-right: 8px;
    list-style: none;
    font-size: 16px;
    color: #003D76;
    cursor: pointer;
    text-decoration: none;
    &:hover {
        color: #434343;;
    }
`

export const LogoPerfil = styled(User)`
    width: 24px;
    height: 24px;
    color: #003d76;


`;

export const LogoExit = styled(Exit)`
    width: 24px;
    height: 24px;
    color: #003d76;
    margin-left: 4px;


`;

export const Caixa = styled.div`
    
    width: 120px;
    display: flex;
    align-items: center;

    

    >p {
        font-size: 8px;
        color: #003D76;
    }

`;
import styled from "styled-components";

export const MenuLink = styled.a`
    padding: 1rem 2rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color: #ffffff;
    transition: all 0.3s ease-in;
    font-size: 0.9rem;
    &:hover {
        color: #C7A85F;
    }
`;

export const Nav = styled.div`
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: #000000;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
`;

export const Logo = styled.a`
    padding: 1rem 0;
    color: #C7A85F;
    text-decoration: none;
    font-weight: 800;
    font-size: 1.7rem;
`;

export const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    @media (max-width: 1024px) {
        overflow: hidden;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        max-height: ${({ isOpen }: {isOpen: boolean}) => (isOpen ? '300px' : '0')};
        transition: max-height 0.3s ease-in;
        width: 100%;
    }
`;

export const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;
    span {
        height: 2px;
        width: 25px;
        background: #C7A85F;
        margin-bottom: 4px;
        border-radius: 5px;
    }
    @media (max-width: 1024px) {
        display: flex;
    }
`;

export const ButtonLogout = styled.button`
    padding: 0.8rem;
    cursor: pointer;
    transition: all 0.2s ease-in;
    border-radius: 10px;
    color: #ffffff;
    background-color: #C7A85F;
    &:hover {
        background-color: #D6B567;
    }
    @media screen and (max-width: 1024px) {
        background-color: transparent;
        :hover {
            color: #C7A85F;
            background: transparent;
        }
    }
`;
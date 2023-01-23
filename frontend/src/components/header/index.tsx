import { useState } from "react";
import { Hamburger, Logo, Menu, MenuLink, Nav, ButtonLogout } from "./styles";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Nav>
      <Logo>Web Cars</Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink to='/'>Cars</MenuLink>
        <MenuLink to="/users">Users</MenuLink>
        <MenuLink to="/brands">Brands</MenuLink>
        <ButtonLogout>Logout</ButtonLogout>
      </Menu>
    </Nav>
  );
};

export default Header;

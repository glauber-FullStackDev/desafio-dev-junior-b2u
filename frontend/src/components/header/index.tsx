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
        <MenuLink href="/users">Users</MenuLink>
        <MenuLink href="/ramdom-dog">Brands</MenuLink>
        <ButtonLogout>Logout</ButtonLogout>
      </Menu>
    </Nav>
  );
};

export default Header;

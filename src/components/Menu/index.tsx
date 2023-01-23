import { Cabecalho, Caixa, CarIcon, ItemLink, Logo, LogoExit, LogoPerfil, Navbar, Titulo as TituloLogo } from "./styles"

const Menu = () => {
    return(
        <Cabecalho>
            <Logo>
                <CarIcon/>
                <TituloLogo>ShopCar</TituloLogo>
            </Logo>
            <Navbar>
                <ItemLink to='/'>Home</ItemLink>
                <ItemLink to='/carros'>Carros</ItemLink>
                <ItemLink to='cadastro'>Anuncie aqui!</ItemLink>
            </Navbar>
            <Caixa>
                <LogoPerfil/>
                <p>Meu perfil</p>
                <LogoExit/>
                <p>Sair</p>
            </Caixa>

        </Cabecalho>
        
    )
};

export default Menu;
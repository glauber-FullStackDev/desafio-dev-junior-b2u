import { Cabecalho, Caixa, CarIcon, Logo, LogoWhat, Navbar, Titulo as TituloLogo } from "./styles"

const Menu = () => {
    return(
        <Cabecalho>
            <Logo>
                <CarIcon/>
                <TituloLogo>ShopCar</TituloLogo>
            </Logo>
            <Navbar>
                <li>Home</li>
                <li>Carros</li>
                <li>Anuncie aqui!</li>
            </Navbar>
            <Caixa>
                <LogoWhat/>
                <p>Chama no Zap</p>
            </Caixa>

        </Cabecalho>
        
    )
};

export default Menu;
import { Caixa, CaixaDeIcone, Container, LogoCar, LogoFace, LogoInsta, LogoTwitter, LogoWhat, } from "./styles";

const Rodape = () => {
    return(
        <Container>
            <Caixa>
                <LogoCar/>
                <p>ShopCar</p>
            </Caixa>
           
           <CaixaDeIcone>
            <LogoWhat/> 
            <LogoFace/> 
            <LogoInsta/> 
            <LogoTwitter/> 
           </CaixaDeIcone>
        </Container>
    );
}

export default Rodape;
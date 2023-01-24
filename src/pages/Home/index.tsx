import { 
    CaixaImg,
    Container,
    Caixa,
    CaixaTexto, 
    ButtonAction 
} from "./styles";
import MyImage from '../../img/compra.jpg'
const Home = () => {
    return(
        <Container>
            <Caixa>
                <CaixaTexto>
                    <p>Anuncie e venda seu carro pelo melhor preço</p>
                </CaixaTexto>
                <p>A gente faz de tudo pra descomplicar sua venda e chegar o mais próximo do preço que você deseja para anunciar e vender carros usados e seminovos. Conte com a gente!</p>
                <ButtonAction to='/cadastro'>
                    Seu anúncio com um click
                </ButtonAction>
            </Caixa>
            <CaixaImg>
                <img src={MyImage} alt="Desenho da venda de um carro" />
            </CaixaImg>
            

        </Container>
        
    )
}

export default Home;
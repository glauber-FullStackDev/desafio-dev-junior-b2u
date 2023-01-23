import { 
    CaixaImg,
    Imagem,
    Container,
    Caixa,
    CaixaTexto, 
    ButtonAction 
} from "./styles";



const Home = () => {
    return(
        <Container>
            <Caixa>
                <CaixaTexto>
                    <p>Anuncie e venda seu carro pelo melhor preço</p>
                </CaixaTexto>
                <p>A gente faz de tudo pra descomplicar sua venda e chegar o mais próximo do preço que você deseja para anunciar e vender carros usados e seminovos. Conte com a gente!</p>
                <ButtonAction>
                    Seu anúncio com um click
                </ButtonAction>
            </Caixa>
            <CaixaImg>
                <Imagem/>
            </CaixaImg>
            

        </Container>
        
    )
}

export default Home;
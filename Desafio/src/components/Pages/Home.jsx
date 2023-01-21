import styles from './Home.module.css';
import audi from '../../assets/carros/audi.png';
import corolla from '../../assets/carros/corolla.png';
import sedan from '../../assets/carros/sedan.png';

function Home() {

    // HTML
    return(
        <main>
            <section className={styles.top}/>

            <section className={styles.bot}>
                <div className={styles.title}>
                    <h1>Compra e venda de carros com confiança!</h1>
                </div>

                <div className={styles.description}>
                    <p>
                        Tentando vender o carro e não consegue? Então você está no lugar certo, 
                        aqui nós te ajudaremos! Aproveite para fazer uma avaliação justa 
                        agora mesmo e não perca dinheiro!
                    </p>
                </div>

                <div className={styles.images}>
                    <div>
                        <img src={audi} alt='audi'></img>
                        <p>Segurança</p>
                    </div>

                    <div>
                        <img src={corolla} alt='corolla'></img>
                        <p>Qualidade</p>
                    </div>

                    <div>
                        <img src={sedan} alt='sedan'></img>
                        <p>Desempenho</p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home;
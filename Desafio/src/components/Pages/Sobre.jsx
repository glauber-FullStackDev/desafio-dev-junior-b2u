import styles from './Sobre.module.css';

function Sobre() {
    return(
        <div>
            <section className={styles.image}/>

            <section className={styles.information}>
                <h1>
                    Sobre
                </h1>

                <p>
                    Bem-vindo à página "Sobre" do meu <span>teste técnico</span> de programação web Fullstack. Este projeto foi criado como parte do meu processo de candidatura para uma vaga de <span>desenvolvedor web</span>. Ele foi desenvolvido com o objetivo de demonstrar minhas <span>habilidades técnicas</span> e conhecimentos na área de desenvolvimento web.
                </p>

                <p>
                    Gostaria de destacar que todas as imagens utilizadas neste projeto foram geradas pela <span>IA Midjourney</span>, que foi treinada para gerar imagens de alta qualidade e realistas, tornando este projeto ainda mais interessante e desafiador.
                </p>
                
                <p>
                    Este projeto foi construído utilizando as seguintes tecnologias: <span>HTML, CSS, JavaScript, React.js, Node.js, Express e MongoDB</span>. Ele foi criado com o objetivo de simular uma <span>plataforma de divulgação de anúncios</span> de venda de automóveis, onde é possível listar, visualizar, criar, editar e excluir carros.
                </p>

                <p>
                    Este projeto foi desenvolvido com muito <span>esforço e dedicação</span>, e espero que ele possa demonstrar minhas habilidades e potencial como desenvolvedor web Fullstack. <span>Agradeço pela oportunidade</span> de mostrar meu trabalho e estou ansioso para continuar a crescer e aprender nesta área emocionante.
                </p>
            </section>
        </div>
    )
}

export default Sobre;
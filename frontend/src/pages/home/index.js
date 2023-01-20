import Header from '../../components/Header';
import './styles.css';

function Home() {
  return (
    <div className="container">
      <Header />
      <div className="content-home">
        <h1>Lista de anuncios de carros</h1>
        <div className="container-cards">
            <div className="content-card">
              <h2>Camaro</h2>
              <strong>Marca: Chevrolet</strong>
              <strong>Ano de Fabricação: 2015</strong>
              <span>Descrição: Poucos KM rodados...</span>
              <div className="container-buttons">
                <button className="btn-edit">Editar</button>
                <button className="btn-delete">Excluir</button>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

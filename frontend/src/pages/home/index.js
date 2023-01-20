import Header from '../../components/Header';
import './styles.css';
import api from '../../services/api';
import { useState, useEffect } from 'react';
import { notifyError, notifySucess } from '../../utils/notifications';

function Home() {
  const defaultForm = {
    nome: '',
    marca: '',
    ano_fabricacao: 0,
    descricao: '',
    nome_dono: '',
    email_dono: '',
    telefone_dono: ''
  }

  const [cars, setCars] = useState([]);
  const [form, setForm] = useState({ ...defaultForm });

  useEffect(() => {
    async function handleListCars() {
      try {
        const response = await api.get(`/carros`);

        setCars([...response.data]);

      } catch (error) {
        notifyError(error.response.data.mensagem);
      }
    }

    handleListCars();

  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.post(`/carros`,
        {
          nome: form.nome,
          marca: form.marca,
          ano_fabricacao: form.ano_fabricacao,
          descricao: form.descricao,
          nome_dono: form.nome_dono,
          email_dono: form.email_dono,
          telefone_dono: form.telefone_dono
        }
      );

      if (response.status > 204) {
        return notifyError(response.data.mensagem);
      }

      notifySucess("Anuncio cadastrado com sucesso!");

      const { data } = await api.get(`/carros`);

      setCars([...data]);
      setForm({...defaultForm});

    } catch (error) {
      notifyError(error.response.data.mensagem);
    }
  }

  function handleChanceForm({ target }) {
    setForm({...form, [target.name]: target.value});
  }

  async function handleDeleteCar(carId) {
    try {
      const response = await api.delete(`/carros/${carId}`);

      if (response.status > 204) {
        return notifyError(response.data.mensagem);
      }

      notifySucess(response.data.mensagem);

      const { data } = await api.get(`/carros`);

      setCars([...data]);

    } catch (error) {
      notifyError(error.response.data.mensagem);
    }
  }


  return (
    <div className="container">
      <Header />
      <div className="content-home">
        <form
         className='container-form'
         onSubmit={handleSubmit}
         >
          <h3>Cadastre um carro</h3>
          <div className='container-inputs'>
            <div className='inputs'>
              <label htmlFor='nome'>Modelo</label>
              <input
                type="text"
                name='nome'
                value={form.nome}
                onChange={handleChanceForm}
              />
            </div>
            <div className='inputs'>
              <label htmlFor='marca'>Marca</label>
              <input
                type="text"
                name='marca'
                value={form.marca}
                onChange={handleChanceForm}
              />
            </div>
            <div className='inputs'>
              <label htmlFor='ano_fabricacao'>Ano de Fabricação</label>
              <input
                type="number"
                name='ano_fabricacao'
                value={form.ano_fabricacao}
                onChange={handleChanceForm}
              />
            </div>
            <div className='inputs'>
              <label htmlFor='descricao'>Descrição</label>
              <input
                type="text"
                name='descricao'
                value={form.descricao}
                onChange={handleChanceForm}
              />
            </div>
            <div className='inputs'>
              <label htmlFor='nome_dono'>Nome do Dono</label>
              <input
                type="text"
                name='nome_dono'
                value={form.nome_dono}
                onChange={handleChanceForm}
              />
            </div>
            <div className='inputs'>
              <label htmlFor='email_dono'>E-mail do Dono</label>
              <input
                type="text"
                name='email_dono'
                value={form.email_dono}
                onChange={handleChanceForm}
              />
            </div>
            <div className='inputs'>
              <label htmlFor='telefone_dono'>Telefone do Dono</label>
              <input
                type="text"
                name='telefone_dono'
                value={form.telefone_dono}
                onChange={handleChanceForm}
              />
            </div>
          </div>
          <button>Cadastrar</button>
        </form>
        <h1>Lista de anuncios de carros</h1>
        <div className="container-cards">
          {cars.map((car) => (
            <div className="content-card" key={car.id}>
              <h2>{car.nome}</h2>
              <strong>{`Marca: ${car.marca}`}</strong>
              <strong>{`Ano de Fabricação: ${car.ano_fabricacao}`}</strong>
              <span>{`Descrição: ${car.descricao}`}</span>
              <div className="container-buttons">
                <button
                  className="btn-edit"
                >
                  Editar
                </button>
                <button
                  className="btn-delete"
                  onClick={() => handleDeleteCar(car.id)}
                >
                  Excluir
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;

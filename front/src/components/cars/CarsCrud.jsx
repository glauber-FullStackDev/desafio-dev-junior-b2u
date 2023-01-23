import React, { useEffect, useState } from 'react';
import api from '../../service/api';
import Main from '../templates/Main';

const headerProps = {
  icon: 'car',
  title: 'Veiculos',
  subtitle: 'Cadastro de veiculos: Incluir, Listar, Alterar e Excluir!',
};

export default function CarsCrud() {
  const [cars, setCars] = useState([]);
  const [nomeCar, setNomeCar] = useState('');
  const [nomeDono, setNomeDono] = useState('');
  const [marcaCar, setMarcaCar] = useState('');
  const [emailDono, setEmailDono] = useState('');
  const [telefoneDono, setTelefoneDono] = useState('');
  const [anoCar, setAnoCar] = useState();
  const [descricaoCar, setDescricaoCar] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [created_at, setCreated_at] = useState('');
  const [updated_at, setUpdated_at] = useState('');
  const [id, setId] = useState();

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const response = await api.get('/');
    setCars(response.data);
  };

  const save = async () => {
    const dados = {
      owner_name: nomeDono,
      owner_email: emailDono,
      owner_phone: telefoneDono,
      car_name: nomeCar,
      car_description: descricaoCar,
      car_brand: marcaCar,
      car_year: anoCar,
    };
    const response = await api.post('/', dados);
    if (!response.error) {
      load();
      clear();
    }
  };

  const clear = () => {
    setNomeDono('');
    setEmailDono('');
    setTelefoneDono('');
    setNomeCar('');
    setDescricaoCar('');
    setMarcaCar('');
    setAnoCar('');
  };

  const editCar = async (car) => {
    setIsEdit(true);
    const response = await api.get(`/${car.id}`);
    setId(response.data.id);
    setNomeDono(response.data.owner_name);
    setEmailDono(response.data.owner_email);
    setTelefoneDono(response.data.owner_phone);
    setNomeCar(response.data.car_name);
    setDescricaoCar(response.data.car_description);
    setMarcaCar(response.data.car_brand);
    setAnoCar(response.data.car_year);
    setCreated_at(response.data.created_at);
    setUpdated_at(response.data.updated_at);
  };

  const saveEdit = async () => {
    const updateDados = {
      owner_name: nomeDono,
      owner_email: emailDono,
      owner_phone: telefoneDono,
      car_name: nomeCar,
      car_description: descricaoCar,
      car_brand: marcaCar,
      car_year: anoCar,
      created_at: created_at,
      updated_at: updated_at,
    };
    const response = await api.put(`/${id}`, updateDados);
    if (!response.error) {
      load();
      clear();
    }

    setIsEdit(false);
  };

  const deleteCar = async (car) => {
    const response = await api.delete(`/${car.id}`);
    if (!response.error) {
      load();
      clear();
    }
  };

  return (
    <Main {...headerProps}>
      <div className='form'>
        {/* linha 1*/}
        <div className='row'>
          <div className='col-12 col-md-5'>
            <div className='form-group'>
              <label>Nome do carro </label>
              <input
                type='text'
                className='form-control'
                name='nomeCar'
                value={nomeCar || ''}
                onChange={(e) => setNomeCar(e.target.value)}
                placeholder='Digite o nome  do veiculo...'
              />
            </div>
          </div>

          <div className='col-12 col-md-5'>
            <div className='form-group'>
              <label>Nome do dono </label>
              <input
                type='text'
                className='form-control'
                name='nomeDono'
                value={nomeDono || ''}
                onChange={(e) => setNomeDono(e.target.value)}
                placeholder='Digite o nome  do dono ...'
              />
            </div>
          </div>
        </div>

        {/* linha 2*/}
        <div className='row'>
          <div className='col-12 col-md-5'>
            <div className='form-group'>
              <label>Marca do carro</label>
              <input
                type='text'
                className='form-control'
                name='marcaCar'
                value={marcaCar || ''}
                onChange={(e) => setMarcaCar(e.target.value)}
                placeholder='Digite a marca do veiculo ...'
              />
            </div>
          </div>

          <div className='col-12 col-md-5'>
            <div className='form-group'>
              <label>E-mail do dono</label>
              <input
                type='text'
                className='form-control'
                name='emailDono'
                value={emailDono || ''}
                onChange={(e) => setEmailDono(e.target.value)}
                placeholder='Digite o email do dono ...'
              />
            </div>
          </div>
        </div>

        {/* linha 3*/}
        <div className='row'>
          <div className='col-12 col-md-5'>
            <div className='form-group'>
              <label>Ano do carro</label>
              <input
                type='text'
                className='form-control'
                name='anoCar'
                value={anoCar || ''}
                onChange={(e) => setAnoCar(e.target.value)}
                placeholder='Digite o ano do veiculo ...'
              />
            </div>
          </div>

          <div className='col-12 col-md-5'>
            <div className='form-group'>
              <label>Telefone do dono</label>
              <input
                type='text'
                className='form-control'
                name='telefoneDono'
                value={telefoneDono || ''}
                onChange={(e) => setTelefoneDono(e.target.value)}
                placeholder='Digite tefefone do dono ...'
              />
            </div>
          </div>
        </div>

        {/*linha 4 */}
        <div className='row'>
          <div className='col-12 col-md-5'>
            <div className='form-group'>
              <label>Descrição do carro</label>
              <input
                type='text'
                className='form-control'
                name='descricaoCar'
                value={descricaoCar || ''}
                onChange={(e) => setDescricaoCar(e.target.value)}
                placeholder='Digite a descrição do veiculo ...'
              />
            </div>
          </div>
        </div>

        <hr />
        <div className='row'>
          <div className='col-12 d-flex justify-content-end'>
            {isEdit ? (
              <button className='btn btn-primary' onClick={saveEdit}>
                Salvar Alterações
              </button>
            ) : (
              <button className='btn btn-primary' onClick={save}>
                Salvar
              </button>
            )}

            <button className='btn btn-secondary ml-2' onClick={clear}>
              Cancelar
            </button>
          </div>
        </div>
      </div>

      <table className='table mt-4'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Marca</th>
            <th>Ano</th>
            <th>Descrição</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => {
            return (
              <tr key={car.id}>
                <td>{car.id}</td>
                <td>{car.car_name}</td>
                <td>{car.car_brand}</td>
                <td>{car.car_year}</td>
                <td>{car.car_description}</td>
                <td>
                  <button className='btn btn-warning' onClick={() => editCar(car)}>
                    <i className='fa fa-pencil'></i>
                  </button>
                  <button className='btn btn-danger ml-2' onClick={() => deleteCar(car)}>
                    <i className='fa fa-trash'></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Main>
  );
}

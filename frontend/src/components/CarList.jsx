import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const CarList = () => {

    //hooks
    const [cars, setCars] = useState([]);


    useEffect(()=> {
        getCars();
    }, []);

    //está comunicando com o backend
    const getCars = async () => {
        const response = await axios.get('http://localhost:4000/');
        setCars(response.data)
    };

    const deleteCar = async(id) => {
        try {
            await axios.delete(`http://localhost:4000/${id}`)
            getCars();
        } catch (error) {
            console.log(error);
        }
    }

  return <div>

    <Navbar/>

        <div className='py-4'>
            <div className='container'>
                <Link to={'add'} className='button btn btn-danger mb-3'>Adicionar novo carro</Link>

                <div className="row hidden-md-up">

                    {cars.map((car, index) => (
                        <div className="col-md-4">
                            <div className="card mb-2 shadow " key={car._id}>
                                <div className="card-block">
                                    <h4 className="card-header mb-3">{index +1} - {car.nome}</h4>
                                    <div className="card-body">
                                        <h6 className='card-subtitle text-muted mb-3'>{car.marca}</h6>
                                        <p><strong>Ano:</strong> {car.ano}</p>
                                        <p><strong>Descrição:</strong> {car.descricao}</p>
                                        <h5 className='text-center'>Dono:</h5>
                                        <p><strong>Nome:</strong> {car.donoNome}</p>
                                        <p><strong>Email:</strong> {car.donoEmail}</p>
                                        <p><strong>Telefone:</strong> {car.donoTelefone}</p>
                                        <div className="text-center">
                                            <Link to={`/${car._id}`} className='btn btn-warning'>Editar</Link>
                                            <button onClick={() => { deleteCar(car._id) }} className='btn btn-danger m-1'>Deletar</button> 
                                        </div>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>

};

export default CarList
import './Modal.css'
import ReactDOM from 'react-dom'
import axios from 'axios';
import { useEffect, useState } from 'react';
import FormEditCar from '../FormEditCar/FormEditCar';

export default function Modal({Id, actionEdit, actionDetails, handleClose}) {
    const [car, setCar] = useState([]);
    const [owner, setOwner] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:3001/cars/details/${Id}`)
        .then(function (response) {
            const CarDetails = response.data['CarDetails']
            console.log(CarDetails)
            setCar(CarDetails);

            const OwnerDetail = response.data['OwnerDetails']
            setOwner(OwnerDetail);
        })
        .catch(function (error) {
    
            console.log(error);
        })
    }, [])
    
    return ReactDOM.createPortal((
        <div className="modal-backdrop">

            <div className="modal">
                <div className='info-modal'>
                    { actionDetails && car &&
                        <div className='card-detalhes' key={car.id}>
                            <h2>Detalhes do Carro</h2>
                            <p>Nome: {car.nome}</p>
                            <p>Marca: {car.marca}</p>
                            <p>Ano: {car.ano}</p>
                            <p>{car.desc}</p>

                            <div className='owner-detalhes'>
                                <h2>Detalhes do Dono</h2>
                                <p>Nome: {owner.nome}</p>
                                <p>Email: {owner.email}</p>
                                <p>Telefone: {owner.telefone}</p>
                            </div>
                        </div>

                        
                        
                    }
                    
                    {actionEdit && <FormEditCar owner={owner} car={car}/>}
                </div>
                
                <button onClick={handleClose}>Fechar</button>
            </div>
        </div>
    ), document.body)
}
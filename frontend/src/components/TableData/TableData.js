import React, { useState } from 'react'
import './TableData.css'
import axios from 'axios';
import {FaUserEdit, FaRegEye, FaTrashAlt} from 'react-icons/fa';
import Modal from '../Modal/Modal';

export default function TableData() {
    const [show, setShow] = useState(false)
    const [edit, setEdit] = useState(false)
    const [clickedid, setClickedId] = useState(''); 
    const [details, setDetails] = useState(false)
    const [cars, setCars] = useState([])
    const handleClose = () => {
        setShow(false)
        setEdit(false)
        setDetails(false)
    }
    const handleId = (e) => {
       const ClickedId = e.currentTarget.dataset.id;
       setClickedId(ClickedId)
    }

    const handleDelete = (e) => {
        const id = e.currentTarget.dataset.id;
        axios.get(`http://localhost:3001/cars/remove/${id}`)
        .then(function (response) {
    
          const cars = response.data['Cars'];
          setCars(cars)
    
        })
        .catch(function (error) {
    
          console.log(error);
        })
    }
    axios.get('http://localhost:3001/cars/list')
    .then(function (response) {

      const cars = response.data['Cars'];
      setCars(cars)

    })
    .catch(function (error) {

      console.log(error);
    })
  return (
    <div>
        {show && edit && <Modal handleClose={handleClose}  Id={clickedid} actionEdit={edit} actionDetails={details}/>}
        {show && details && <Modal handleClose={handleClose}  Id={clickedid} actionEdit={edit} actionDetails={details}/>}
        <div className='card-container'>
            {cars && cars.map((car) =>(
                <div className='card' key={car.id} >
                    <span>Nome: {car.nome}</span>
                    <span>Marca: {car.marca}</span>
                    <span>Ano: {car.ano}</span>
                    <span>{car.desc}</span>
                    <div className='icons'>
                        <span  onClick={(e) => {setShow(true); setEdit(true); handleId(e)}} data-id={car.id}><FaUserEdit/></span>
                        <span  onClick={(e) => {setShow(true); setDetails(true); handleId(e)}} data-id={car.id}><FaRegEye/></span>
                        <span  onClick={(e) => {handleDelete(e)}} data-id={car.id}><FaTrashAlt/></span>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

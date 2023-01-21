import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default function FormEditCar({car}) {
  const [nome, setNome] = useState('')
  const [marca, setMarca] = useState('')
  const [ano, setAno] = useState('')
  const [desc, setDesc] = useState('')
  const [ownerId, setOwnerId] = useState('')
  const [Owner, setOwner] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3001/owners/list')
    .then(function (response) {

      const OwnerList = response.data['Owners']
      setOwner(OwnerList);

    })
    .catch(function (error) {

      console.log(error);
    })
  }, [])
  const handleEdit = (event) => {
    event.preventDefault();
    const id = event.target.id
    axios.post(`http://localhost:3001/cars/edit`,  {id, nome, marca, ano, desc, ownerId})
  }
  const handleSelectOwner = event =>{
    setOwnerId(event.target.value)
  }

  return (
    <div>
        <form id={car.id} onSubmit={handleEdit}>
          <div className='FormAddCar-item'>
              <label>Nome do carro</label>
              <input name="nome" onChange={(e) => setNome(e.target.value)} value={nome} required placeholder={car.nome} ></input>
            </div>
            <div className='FormAddCar-item'>
              <label>Marca do carro</label>
              <input name="marca" onChange={(e) => setMarca(e.target.value)} value={marca} required placeholder={car.marca}></input>
            </div>
            <div className='FormAddCar-item'>
              <label>Ano do carro</label>
              <input name='ano' onChange={(e) => setAno(e.target.value)} value={ano} required placeholder={car.ano} type="number"  size='4' min="1900" max="2099" step="1"></input>
            </div>
            <div className='FormAddCar-item'>
              <label>Descrição do carro</label>
              <input name="desc" onChange={(e) => setDesc(e.target.value)} value={desc} required placeholder={car.desc}></input>
            </div>
            <div className='FormAddCar-item'>
            <label for="owner">Selecione Dono:</label>
              <select required value={ownerId} onChange={handleSelectOwner}  name="ownerid" id="owner">
                <option value="" selected>Selecione um dono</option>
                {Owner && Owner.map((owner) => (
                  <option key={owner.id} value={owner.id}>{owner.nome}</option>
                ))}
              </select>
            </div>
            <input class="btn" type="submit" value="Editar"></input>
        </form>
    </div>
  )
}

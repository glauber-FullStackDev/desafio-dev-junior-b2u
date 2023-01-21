import React, { useEffect, useState } from 'react'
import './FormAddCar.css'
import axios from 'axios';

export default function AddCar() {
  const [nome, setNome] = useState('')
  const [marca, setMarca] = useState('')
  const [ano, setAno] = useState('')
  const [desc, setDesc] = useState('')
  const [ownerId, setOwnerId] = useState('')
  const [Owner, setOwner] = useState([])
    axios.get('http://localhost:3001/owners/list')
    .then(function (response) {
      const OwnerList = response.data['Owners']
      setOwner(OwnerList);
    })
    .catch(function (error) {
      console.log(error);
    })
  
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3001/cars/create', {nome, marca, ano, desc, ownerId})
    setNome('');
    setMarca('');
    setAno('');
    setDesc('');
  }

  const handleSelectOwner = event =>{
    setOwnerId(event.target.value)
  }
  return (
    <div>
        <h1 className='title'>Adicione um Carro</h1>

        <form  onSubmit={handleSubmit} className='FormAddCar'>
          <div className='FormAddCar-item'>
            <label>Nome do carro</label>
            <input name="nome" onChange={(e) => setNome(e.target.value)} value={nome} required placeholder='Nome'></input>
          </div>
          <div className='FormAddCar-item'>
            <label>Marca do carro</label>
            <input name="marca"onChange={(e) => setMarca(e.target.value)} value={marca} required placeholder='Marca'></input>
          </div>
          <div className='FormAddCar-item'>
            <label>Ano Fabricação do carro</label>
            <input name='ano' onChange={(e) => setAno(e.target.value)} value={ano} required type="number"  size='4' min="1900" max="2099" step="1" placeholder='Ano'></input>
          </div>
          <div className='FormAddCar-item'>
            <label>Descrição do carro</label>
            <input name="desc" onChange={(e) => setDesc(e.target.value)} value={desc} required placeholder='Descrição'></input>
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
          <input class="btn" type="submit" value="+"></input>
        </form>
    </div>
  )
}

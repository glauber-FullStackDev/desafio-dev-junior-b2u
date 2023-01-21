import React, { useState } from 'react'
import { IMaskInput } from "react-imask";
import axios from 'axios';

export default function FormAddDono() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTel] = useState('')
  
    const handleSubmit = (event) => {
      event.preventDefault();
      axios.post('http://localhost:3001/owners/create', {nome, email, telefone})
      .then(function (response) {
        setNome('');
        setEmail('');
        setTel('');
  
      })
    }
    return (
      <div>
          <h1 className='title'>Adicione um Dono</h1>
  
          <form  onSubmit={handleSubmit} className='FormAddCar'>
            <div className='FormAddCar-item'>
              <label>Nome</label>
              <input name="nome" onChange={(e) => setNome(e.target.value)} value={nome} required placeholder='Nome'></input>
            </div>
            <div className='FormAddCar-item'>
              <label>Email</label>
              <input name="email" type="email" onChange={(e) => setEmail(e.target.value)} value={email} required placeholder='Email'></input>
            </div>
            <div className='FormAddCar-item'>
              <label>Telefone</label>
              <IMaskInput name='telefone' onChange={(e) => setTel(e.target.value)} value={telefone} required  mask="(00) 0000-0000" placeholder='Telefone' ></IMaskInput>
            </div>
            <input class="btn" type="submit" value="+"></input>
          </form>
      </div>
    )
}

import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../pages/Home'
import Users from '../pages/Users'
import Register from '../pages/Register'



const Rotas = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/register' element={<Register/>}/>
    </Routes>
  )
}

export default Rotas
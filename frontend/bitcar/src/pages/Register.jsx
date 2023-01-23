import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FormRegisterUser from '../components/FormRegisterUser'
import FormRegisterCar from '../components/FormRegisterCar'

const Register = () => {
  return (
    <div>
      <Header/>
      <FormRegisterCar/>
      <FormRegisterUser/>

      <Footer/>

    </div>
  )
}

export default Register
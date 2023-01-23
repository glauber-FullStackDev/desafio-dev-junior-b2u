import Header from '../components/Header'
import Dashboard from '../components/Dashboard'
import Footer from '../components/Footer'
import CardCar from '../components/CardCar'
import api from '../services/api'
import { useEffect, useState } from 'react'


const Home = () => {
  

  return (
    <div>
        <Header/>
        <Dashboard dashboardTitle={'Carros'} dashboardOrder={['Recentemente Adicionados','Mais novos']} dashboardCard={CardCar}/>
        <Footer/>

    </div>
  )
}

export default Home
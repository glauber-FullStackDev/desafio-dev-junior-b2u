import React from 'react'
import * as S from './Styled'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import CardVehicles from '../../components/CardVehicles/CardVehicles'
import { GetVehicles } from '../../services/VehiclesServices'

const Home = () => {
  const vehicles = GetVehicles("/vehicles")
  return (
    <S.Container>
      <Header/>
        <CardVehicles 
        vehicles={vehicles}
        count={8}
        totalCard={8}
        />
      <Footer/>
    </S.Container>
  )
}

export default Home
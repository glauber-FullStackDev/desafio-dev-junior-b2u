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
      <S.AllCards>
        <CardVehicles vehicles={vehicles}/>
      </S.AllCards>
      <Footer/>
    </S.Container>
  )
}

export default Home
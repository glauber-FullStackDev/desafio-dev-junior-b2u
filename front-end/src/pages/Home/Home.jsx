import React from 'react'
import * as S from './Styled'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import CardVehicles from '../../components/CardVehicles/CardVehicles'
import ButtonSlide from '../../components/ButtonSlide/ButtonSlide'
import { GetVehicles } from '../../services/VehiclesServices'
import usePagination from '../../hook/usePagination'

const Home = () => {
  const vehicles = GetVehicles("/vehicles")

  const {totalCard,totalPages,count,page,pagination} = usePagination(vehicles)
  
  return (
    <S.Container>
      <Header/>
        <CardVehicles 
        vehicles={vehicles}
        count={count}
        totalCard={totalCard}
        />
        <ButtonSlide
        button={()=>pagination()}
        totalPage={totalPages}
        page={page}
        />
      <Footer/>
    </S.Container>
  )
}

export default Home
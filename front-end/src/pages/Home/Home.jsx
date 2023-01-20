import React from 'react'
import * as S from './Styled'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import CardVehicles from '../../components/CardVehicles/CardVehicles'
import ButtonSlide from '../../components/ButtonSlide/ButtonSlide'
import usePagination from '../../hook/usePagination'
import { useNavigate } from 'react-router-dom'
import { goToCreate } from '../../router/coordinator'
import useVehicle from '../../hook/useVehicle'
import { useEffect } from 'react'

const Home = () => {
  const {getVehicles,vehicles} = useVehicle()
  useEffect(()=> getVehicles("/vehicles"),[])
  const navigate = useNavigate()
  const {totalCard,totalPages,count,page,pagination} = 
  usePagination(vehicles)
  
  return (
    <S.Container>
      <Header
        button={()=>goToCreate(navigate)}
      />
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
      <Footer
      
      />
    </S.Container>
  )
}

export default Home
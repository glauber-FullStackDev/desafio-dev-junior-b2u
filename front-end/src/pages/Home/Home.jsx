import React from 'react'
import * as S from './Styled'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import CardVehicles from '../../components/CardVehicles/CardVehicles'
import ButtonSlide from '../../components/ButtonSlide/ButtonSlide'
import  Details  from '../../components/ModalDetails/Details'
import usePagination from '../../hook/usePagination'
import { useNavigate } from 'react-router-dom'
import { goToCreate } from '../../router/coordinator'
import useVehicle from '../../hook/useVehicle'
import { useEffect, useState } from 'react'


const Home = () => {
  const [modalDetails, setModalDetail] = useState(false)
  const [vehicleDetails,setVehicleDetails] = useState({})
  const { getVehicles, vehicles } = useVehicle()
  useEffect(() => getVehicles("/vehicles"), [])
  const navigate = useNavigate()
  const { totalCard, totalPages, count, page, pagination } =
    usePagination(vehicles)

    const lala = () => {

    }

  console.log(vehicleDetails)
  return (
    <S.Container>
      <Details
        modal={modalDetails}
        close={() => setModalDetail(!modalDetails)}
        vehicleDetails={vehicleDetails}
      />
      <Header
        button={() => goToCreate(navigate)}
      />
      {vehicles.map(()=>{
        return(
          <CardVehicles
        vehicles={vehicles}
        count={count}
        totalCard={totalCard}
        buttonDetails={()=>setVehicleDetails()}
      />

        )
      })}
      
      <ButtonSlide
        button={() => pagination()}
        totalPage={totalPages}
        page={page}
      />
      <Footer
      />
    </S.Container>
  )
}

export default Home
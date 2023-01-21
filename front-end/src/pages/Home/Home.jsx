import React, { useContext } from 'react'
import * as S from './Styled'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import CardVehicles from '../../components/CardVehicles/CardVehicles'
import ButtonSlide from '../../components/ButtonSlide/ButtonSlide'
import Details from '../../components/ModalDetails/Details'
import usePagination from '../../hook/usePagination'
import { useNavigate } from 'react-router-dom'
import { goToCreate } from '../../router/coordinator'
import useVehicle from '../../hook/useVehicle'
import { useEffect, useState } from 'react'
import { VehicleContext } from '../../context/vehicleContext'


const Home = () => {
  const navigate = useNavigate()
  const { vehicles, setVehiclesDetails, vehiclesDetails } = useContext(VehicleContext)
  const [modalDetails, setModalDetail] = useState(false)

  const { getVehicles, deleteVehicle } = useVehicle()
  useEffect(() => getVehicles(), [])

  const { totalCard, totalPages, count, page, pagination } =
    usePagination(vehicles)

  return (
    <S.Container>
      <Details
        modal={modalDetails}
        close={() => {
          setVehiclesDetails()
          setModalDetail(!modalDetails)
        }}
        vehicleDetails={vehiclesDetails}
        deleteVehicle={() => {
          deleteVehicle(`/vehicles/delete/${vehiclesDetails?.id}`)
          setModalDetail(!modalDetails)
          setVehiclesDetails()
        }}
        update={() => goToCreate(navigate)} />

      <Header button={() => goToCreate(navigate)} />

      <S.AllCards>
        {vehicles?.map((item, index) => {
          const from = count - totalCard;
          if (index >= from && index < count) {
            return (
              <CardVehicles
                vehicle={item}
                count={count}
                totalCard={totalCard}
                buttonDetails={() => {
                  setVehiclesDetails(item)
                  setModalDetail(!modalDetails)
                }} />
            )
          }
        })}
      </S.AllCards>

      <ButtonSlide
        button={() => pagination()}
        totalPage={totalPages}
        page={page}
      />
      <Footer />
    </S.Container>
  )
}

export default Home
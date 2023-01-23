import CarListManagement, { CarListManagementProps } from '@/components/CarListManagement'
import Header from '@/components/Header'
import { GetServerSideProps } from 'next'
import { api } from '../../../services/api'
import styles from './styles.module.scss'

export default function CarManagement({cars}: CarListManagementProps) {
  return (
    <div className={styles.carManagementContainer}>
      <Header/>

      <CarListManagement cars={cars}/>

    </div>
  )
}


export const getServerSideProps: GetServerSideProps = async () => {
  const carsData = await api.get('cars')
  

  const cars = carsData.data

  return {
    props: {
      cars
    }
  }
}
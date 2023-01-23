import CarList, { CarListProps } from '@/components/CarList'
import { GetServerSideProps } from 'next'
import { api } from '../../services/api'
import Header from '../components/Header'
import styles from './styles.module.scss'

export default function Landing({ cars }: CarListProps) {

  return (
    <div className={styles.landingContainer}>
      <Header/>
      <div className={styles.carList}>
        <h2 className={styles.listTitle}>
          Listagem de Carros
        </h2>

        {cars ? <CarList cars={cars}/> : <h2>Não há carros cadastrados ainda.</h2>}
        
      </div>
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


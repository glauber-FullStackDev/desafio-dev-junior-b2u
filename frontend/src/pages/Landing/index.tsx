import CarList from '@/components/CarList'
import Header from '../../components/Header'
import styles from './styles.module.scss'

export default function Landing() {

  return (
    <div className={styles.landingContainer}>
      <Header/>
      <div className={styles.carList}>
        <h2 className={styles.listTitle}>
          Listagem de Carros
        </h2>

        <CarList/>
      </div>
    </div>
  )
}
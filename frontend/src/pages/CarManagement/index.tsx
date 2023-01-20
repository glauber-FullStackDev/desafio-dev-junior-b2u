import Header from '@/components/Header'
import styles from './styles.module.scss'

export default function CarManagement() {
  return (
    <div className={styles.carManagementContainer}>
      <Header/>

      <div className={styles.managementCars}>
        <h2 className={styles.managementTitle}> Gerenciar carros</h2>
      </div>
    </div>
  )
}
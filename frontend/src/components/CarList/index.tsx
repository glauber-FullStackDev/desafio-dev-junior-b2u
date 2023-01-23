import { GetServerSideProps } from 'next'
import { api } from '../../../services/api'
import styles from './styles.module.scss'

export type Owner = {
	id: string
	owner_name: string
	email: string
	telephone: string
	created_at: Date
}

export type Car = {
  id: string
	name: string
	brand: string
	manufactureYear: number
	description: string
	owner: Owner
	created_at: Date
}

export type CarListProps = {
  cars: Array<Car>
}

export default function CarList({ cars }: CarListProps) {

  return (
    <div className={styles.carListContainer}>
      <div className={styles.list}>
      <table className={styles.cartTable} cellSpacing={0}>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Marca</th>
                <th>Ano</th>
                <th>Descrição</th>
                <th>Dono</th>
              </tr>
            </thead>
            
            <tbody className={styles.tbody}>
  
            {cars?.map((car, index) => {
              return (
                <tr key={car.id}>
                  <td className={styles.name}> 
                    <span>Nome</span>
                    <div>{car.name}</div>
                  </td>
                  <td className={styles.brand}>
                    <span>Marca</span>
                    <div> {car.brand} </div>
                  </td>
                  <td className={styles.manufactureYear}>
                    <span>Ano</span>
                    <div>{car.manufactureYear}</div>
                  </td>
                  <td className={styles.description}>
                    <span>Descrição</span>
                    <div className={styles.descriptionContent}>{car.description}</div>
                  </td>
                  <td className={styles.owner}>
                    <span>Dono</span>
                    <div>{car.owner.owner_name}</div>
                  </td>
                </tr>
              )
            })}
            </tbody>           
          </table>
      </div>
    </div>
  )
}
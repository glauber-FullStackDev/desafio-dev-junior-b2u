// styles
import styles from './CarHome.module.css'
// interfaces
import { Car } from "../../interfaces/Car"
// icons
import { Eye } from 'phosphor-react'
// react
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/auth/AuthContext'

const imgsSaves = 'http://localhost:3000/uploads'

type Props = {
    car: Car
}

export const CarHome = ({ car }: Props) => {
  const { user } = useContext(AuthContext)!
  const { name, brand, User: ownerCar } = car

  return (
    <div className={styles.carComponent}>
      <div className={styles.imageCar}>
        <Link to={`/cars/${car.id}`}>
          <img src={`${imgsSaves}/${car.image}`} alt="Foto do carro" />
        </Link>
      </div>
      
      <div className={styles.infoCar}>
        <div className={styles.datasCar}>
          {(name.length + brand.length) > 50 ? (
              <p>{name.substring(0, 35)}... - {brand.substring(0, 35)}...</p>
          ) : (
              <p>{name} - {brand}</p>
          )}
        </div>
        <div className={styles.datasOwner}>
          {(user && user.email === ownerCar?.email) ? (
            <p>Dono: <span>{ownerCar?.name}(você)</span></p>

          ) : (
            <p>Dono: <span>{ownerCar?.name}</span></p>
          )}
        </div>
      </div>

      <Link to={`/cars/${car.id}`}>
        <Eye className={styles.viewMore} />
      </Link>
    </div>
  )
}
// styles
import styles from './CarDetails.module.css'
// hooks
import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// context
import { CarsContext } from '../../context/cars/CarsContext'
// components
import { AuthContext } from '../../context/auth/AuthContext'

const imgsSaves = 'http://localhost:3000/uploads'

export const CarDetails = () => {

    const { getCarById, error, carForId } = useContext(CarsContext)!
    const { user } = useContext(AuthContext)!
    const { id } = useParams()
    
    useEffect(() => {
        if(id) getCarById(id)
    }, [])

    return (
        <div className={styles.carDetails}>
            {carForId && (
                <div className={styles.car}>
                    <div className={styles.carImage}>
                        <img src={`${imgsSaves}/${carForId.image}`} alt="" />
                    </div>
                    <div className={styles.datasCar}>
                        <h2>Detalhes do carro</h2>
                        <p><span>Nome:</span> {carForId.name}</p>
                        <p><span>Descrição:</span> {carForId.description}</p>
                        <p><span>Marca:</span> {carForId.brand}</p>
                        <p><span>Ano de fabricação:</span> {carForId.year_manufacture}</p>
                    </div>
                    <div className={styles.ownerCar}>
                        <h2>Dados do dono do carro</h2> 
                        {(user && user.email === carForId.User?.email) ? (
                            <p><span>Nome:</span> {carForId.User?.name}(você)</p>   
                        ) : (
                            <p><span>Nome:</span> {carForId.User?.name}</p>
                        )}
                        <p><span>Email:</span> {carForId.User?.email}</p>
                        <p><span>Telefone de contato:</span> {carForId.User?.contact_phone}</p>
                    </div>
                </div>
            )}
            
            {error && (
                <div className={styles.noContent}>
                    <p>{error.message}</p>
                </div>
            )}
            
        </div>

    )
}
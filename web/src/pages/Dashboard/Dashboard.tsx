// stlyes
import styles from './Dashboard.module.css'
// react
import { Link } from 'react-router-dom'
//components
import { Message } from '../../components/Message/Message'
import { FormCreateUpdate } from '../../components/FormCreateUpdate/FormCreateUpdate'
// hooks
import { useContext, useEffect, useState } from 'react'
// context
import { CarsContext } from '../../context/cars/CarsContext'
// icons
import { Eye, Pencil, Trash } from 'phosphor-react'
import { Car } from '../../interfaces/Car'

const imgsSaves = 'http://localhost:3000/uploads'


export const Dashboard = () => {
    const { getCarsByUserLogged, carsUser, createCar, deleteCar, success, error } = useContext(CarsContext)!

    const handleSubmit = (car: Car) => {
        const { name, description, brand, year_manufacture, image } = car
    
        const formData = new FormData()

        formData.append('name', name)
        formData.append('description', description)
        formData.append('brand', brand)
        formData.append('year_manufacture', String(year_manufacture))
        formData.append('image', image)

        createCar(formData)
        return
    }

    const handleDelete = (id: string) => {
        deleteCar(id)
        return
    }

    useEffect(() => {
        getCarsByUserLogged()
    }, [])

    return (
        <div className={styles.dashboard}>
            <FormCreateUpdate handleSubmit={handleSubmit} car={undefined} />
            
            {success && <Message msg={success} type='success' />}
            {error && <Message msg={error.message} type='error' />}

            <div className={styles.myCars}>
                <h1>Carros que você anunciou</h1>
                {(carsUser && carsUser.length > 0) ? (
                    <div className={styles.cars}>
                        {carsUser.map(car => (
                            <div className={styles.car} key={car.id} >
                                <div className={styles.imageCar}>
                                    <Link to={`/cars/${car.id}`}>
                                        <img src={`${imgsSaves}/${car.image}`} alt="Foto do carro" />
                                    </Link>
                                </div>
                                <div className={styles.nameBrandCar}>
                                    {(car.name.length + car.brand.length) > 50 ? (
                                        <h2>{car.name.substring(0, 35)}... - {car.brand.substring(0, 35)}...</h2>
                                    ) : (
                                        <h2>{car.name} - {car.brand}</h2>
                                    )}
                                </div>
                                <div className={styles.optionsCar}>
                                    <Link to={`/cars/update/${car.id}`}>
                                        <Pencil cursor='pointer' />
                                    </Link>
                                    <Link to={`/cars/${car.id}`}>
                                        <Eye cursor='pointer' />
                                    </Link>
                                    <Link to=''>
                                        <Trash 
                                            cursor='pointer' 
                                            onClick={() => handleDelete(car.id!)}
                                        />
                                    </Link>
                                </div>
                            </div>
                           
                        ))}
                    </div>
                ) : (
                    <div className={styles.noCars}>
                        <p>Sem carros anunciados ainda...</p>
                    </div>
                )}
            </div>
        </div>
    )
}
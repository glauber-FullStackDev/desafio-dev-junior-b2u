// hooks
import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// context
import { CarsContext } from '../../context/cars/CarsContext'
// components
import { FormCreateUpdate } from '../../components/FormCreateUpdate/FormCreateUpdate'
import { Message } from '../../components/Message/Message'
// interfaces
import { Car } from '../../interfaces/Car'

export const UpdateCar = () => {
    const { id } = useParams()
    const { getCarById, carForId, updateCar } = useContext(CarsContext)!
    const { error, success } = useContext(CarsContext)!

    useEffect(() => {
        if(id) getCarById(id)  
    }, [])

    const handleSubmit = (car: Car) => {
        const { name, description, brand, year_manufacture, image } = car
        const formData = new FormData()

        formData.append('name', name)
        formData.append('description', description)
        formData.append('brand', brand)
        formData.append('year_manufacture', String(year_manufacture))
        formData.append('image', image)

        if(id){
            updateCar(id, formData)
        }
        
        return
    }

    return (
        <div>
            {success && <Message msg={success} type='success' />} 
            
            {carForId ? (
                <div className="infosCar">
                    <FormCreateUpdate handleSubmit={handleSubmit} car={carForId} />
                    {error && <Message msg={error.message} type='error' />} 
                </div>
            ) : (
                <p>Carregando dados...</p>
            )}
            
        </div>
    )
}
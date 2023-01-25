// style
import styles from './FormCreateUpdate.module.css'
// hooks
import { useContext, useEffect, useState } from 'react'
// context
import { CarsContext } from '../../context/cars/CarsContext'
// interfaces
import { Car } from '../../interfaces/Car'

const imgsSaves = 'http://localhost:3000/uploads'

interface Props {
    car?: Car
    handleSubmit: (car: Car) => void
}

export const FormCreateUpdate = ({ car, handleSubmit }: Props) => {
    const [datasCar, setDatasCar] = useState<Car>({
        brand: '',
        description: '',
        name: '',
        year_manufacture: 0,
        image: ''
    })

    const { loading, error } = useContext(CarsContext)!
    const [preview, setPreview] = useState<any>('')

    useEffect(() => {
        if(car) {
            setDatasCar(prev => {
                const newDatas = { 
                    ...prev, 
                    brand: car.brand,
                    description: car.description,
                    name: car.name,
                    year_manufacture: car.year_manufacture
                }
                return newDatas
            })
        }
    }, [car])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setDatasCar(prev => {
            const newDatas = { ...prev, [name]: value }
            return newDatas
        })
    }

    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files![0]) {
            setDatasCar(prev => {
                const newDatas = { ...prev, image: e.target.files![0] }
                return newDatas
            })
            setPreview(e.target.files![0])
        }
        
    }

    const submitForm = () => {
        handleSubmit(datasCar)
        if(!car && !error) {
            setDatasCar({
                brand: '',
                description: '',
                name: '',
                year_manufacture: 0,
                image: ''
            })
        }
    }

    return (
        <div className={styles.formCreateUpdate}>
            {(car) && (
                <div className={styles.imageCar}>
                    <img src={preview ?
                        URL.createObjectURL(preview) :
                        `${imgsSaves}/${car.image}`
                    } alt="Foto do carro" />
                </div>
                
            )}
            {(car && preview) && (
                <button className={styles.closePreview} onClick={() => {
                    setPreview('')
                    datasCar.image = ''
                }
                }>X</button>
            )}
            <div className={styles.componentsForm}>
                <div className={styles.elementForm}>
                    <input 
                        type='text'
                        name='name' 
                        placeholder='Nome' 
                        value={datasCar.name}
                        onChange={(e) => handleChange(e)}
                    />
                </div>

                <div className={styles.elementForm}>
                    <input 
                        type="text" 
                        name='description'
                        placeholder='Descrição'
                        value={datasCar.description}
                        onChange={(e) => handleChange(e)}
                    />
                </div>

                <div className={styles.elementForm}>
                    <input 
                        type="text" 
                        name='brand'
                        placeholder='Marca'
                        value={datasCar.brand}
                        onChange={(e) => handleChange(e)}
                    />
                </div>

                <div className={styles.elementForm}>
                    <input 
                        type="number" 
                        name='year_manufacture'
                        placeholder='Ano de fabricação'
                        value={datasCar.year_manufacture || ''}
                        min={0}
                        onChange={(e) => handleChange(e)}
                    />
                </div>

                <div className={styles.elementForm}>
                    <input 
                        type="file" 
                        name='image'
                        placeholder='Imagem'
                        onChange={(e) => handleFile(e)}
                    />
                </div>

                {loading ? (
                    <button type="submit" disabled className={styles.btnSubmit}>Aguarde...</button>
                ) : (
                    <button type="submit" onClick={submitForm} className={styles.btnSubmit}>
                    { car ? 'Atualizar' : 'Criar'}    
                    </button>
                )}
                

            </div>
        </div>
    )
}
// hooks
import { createContext, useEffect, useState } from 'react'
// interfaces
import { ErrorRequest } from "../../interfaces/ErrorRequest";
import { Car } from '../../interfaces/Car';
// api
import { api } from "../../hooks/api";

interface Props {
    children: React.ReactNode
}

interface ContentCarsContext {
    getCars: (skip: number, take: number) => void
    getCarById: (id: string) => void
    getCarsByUserLogged: () => void
    countCar: () => Promise<number>
    createCar: (formData: FormData) => void
    updateCar: (id: string, formData: FormData) => void
    deleteCar: (id: string) => void
    carsUser: Car[]
    listCars: Car[]
    carForId: Car | null
    error: ErrorRequest | false
    loading: boolean
    success: string 
}

export const CarsContext = createContext<ContentCarsContext | null>(null)

export function CarsContextProvider ({ children }: Props){

    const [listCars, setListCars] = useState<Car[]>([])
    const [carsUser, setCarsUser] = useState<Car[]>([])
    const [carForId, setCarForId] = useState<Car | null>(null)
    const [error, setError] = useState<ErrorRequest | false>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [success, setSuccess] = useState<string>('')

    const restartStates = () => {
        setError(false)
        setLoading(false)
        setSuccess('')
    }

    const getCars = async(skip: number, take: number) => {
        restartStates()
        const datas = await api.get(`/cars?skip=${skip || 0}&take=${take || 10}`)
            .then(res => { return res.data.cars})

        setListCars(datas)
    }

    const getCarById = async (id: string) => {
        restartStates()
        setCarForId(null)
        const datas = await api.get(`/cars/${id}`)
            .then(res => { return res.data.car})
            .catch(err => { return err.response.data })
        if(datas.error) {
            setError(datas.error)
            return
        }
        setCarForId(datas)
    }

    const getCarsByUserLogged = async () => {
        restartStates()
        const datas = await api.get(`/cars/user/login`)
            .then(res => { return res.data.cars })
            .catch(err => { return err.response.data })
        if(datas.error) {
            setError(datas.error)
            return
        }
        setCarsUser(datas)
    }

    const countCar = async () => {
        const data = await api.get('/cars/all/count')
            .then(res => { return res.data })
        return data.count
    }

    const createCar = async (formData: FormData) => {
        restartStates()
        setLoading(true)
        const datas = await api.post('/cars', formData)
            .then(res => { return res.data })
            .catch(err => { return err.response.data })
        
        if(datas.error) {
            setError(datas.error)
            setLoading(false)
            return
        }

        if((carsUser && carsUser.length > 0)){
            const newCarsUser = [ datas.car, ...carsUser ]
            setCarsUser(newCarsUser)
        } else {
            setCarsUser([datas.car])
        }
        setSuccess(datas.message)
        setLoading(false)

    }

    const updateCar = async (id: string, formData: FormData) => {
        restartStates()
        setLoading(true)
        const datas = await api.put(`/cars/${id}`, formData)
            .then(res => { return res.data })
            .catch(err => { return err.response.data })

        if(datas.error) {
            setError(datas.error)
            setLoading(false)
            return
        }
        setSuccess(datas.message)
        setLoading(false)
    }

    const deleteCar = async (id: string) => {
        restartStates()
        const datas = await api.delete(`/cars/${id}`)
            .then(res => { return res.data })
            .catch(err => { return err.response.data })

        if(datas.error) {
            setError(datas.error)
            return
        }

        const newDatas = carsUser.filter(car => car.id !== id)
        setCarsUser(newDatas)
        setSuccess(datas.message)
    }


    const contentCars: ContentCarsContext = {
        getCars,
        getCarById,
        listCars,
        getCarsByUserLogged,
        countCar,
        createCar,
        deleteCar,
        updateCar,
        carForId,
        carsUser,
        error,
        loading, 
        success,
    } 

    return (
        <CarsContext.Provider value={ contentCars }>
            { children }
        </CarsContext.Provider>
    )
}
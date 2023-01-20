import axios from "axios";
import { useState } from "react";
import {BASE_URL} from '../constants/BASE_URL'

const useVehicle = () => {
    const [message,setMessage] = useState()
    const [vehicles,setVehicles] = useState()
    const [errorMessage,setErrorMessage] = useState()

    const getVehicles = (url) => {  
        axios
        .get(`${BASE_URL}${url}`)
        .then(res => setVehicles(res.data.response))
        .catch(error => console.log(setVehicles(error.message)) )     
    }

    const changeVehicle = (url,body,clean) => {    
        axios
        .post(`${BASE_URL}${url}`,body)
        .then(res => {
            setMessage(res.data.response)
            clean()
        })
        .catch(error => setErrorMessage(error.response.data.message))
    }

    return {changeVehicle,message,getVehicles,vehicles,errorMessage}
      
}

export default useVehicle
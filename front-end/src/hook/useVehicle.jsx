import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {BASE_URL} from '../constants/BASE_URL'
import { VehicleContext } from "../context/vehicleContext";
import { goToHome } from "../router/coordinator";

const useVehicle = () => {
    const navigate = useNavigate()
    const {setVehicles,setVehiclesDetails} = useContext(VehicleContext)
    const [errorMessage,setErrorMessage] = useState()

    const getVehicles = () => {  
        axios
        .get(`${BASE_URL}/vehicles`)
        .then(res => setVehicles(res.data.response))
        .catch(error => console.log(setVehicles(error.message)) )     
    }

    const changeVehicle = (url,body,clean) => {    
        axios
        .post(`${BASE_URL}${url}`,body)
        .then(res => {
            alert(res.data.response)
            setErrorMessage()
            clean()
            
        })
        .catch(error => setErrorMessage(error.response.data.message))
    }

    const updateVehicle = (url,body,clean) => {    
        axios
        .put(`${BASE_URL}${url}`,body)
        .then(res => {
            alert(res.data.response)
            setVehiclesDetails()
            goToHome(navigate)
             
        })
        .catch(error => setErrorMessage(error.response.data.message))
    }

    const deleteVehicle = (url) => {   
        console.log(`${BASE_URL}${url}`) 
        axios
        .delete(`${BASE_URL}${url}`)
        .then(res => {
            alert(res.data.response)
            setVehiclesDetails()
            getVehicles()
        })
        .catch(error => setErrorMessage(error.response.data.message))
    }
    return {changeVehicle,getVehicles,errorMessage,deleteVehicle,updateVehicle}
      
}

export default useVehicle
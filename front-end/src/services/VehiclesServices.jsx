import axios from "axios";
import { useState,useEffect } from "react";
import {BASE_URL} from '../constants/BASE_URL'

export const GetVehicles = (url) => {
    const [vehicles,setVehicles] = useState()
    useEffect(()=>{
    axios
    .get(`${BASE_URL}${url}`)
    .then(res => setVehicles(res.data.response))
    .catch(error => console.log(setVehicles(error.message)) )
    },[])
    return vehicles
}

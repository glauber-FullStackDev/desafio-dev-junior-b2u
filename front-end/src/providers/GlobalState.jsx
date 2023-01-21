import React, {useState } from 'react'
import {VehicleContext} from '../context/vehicleContext'

export const GlobalState = (props) => {
    const vehicle = {
        vehicleState:{
            vehicles:[],
            details:'',
            error:''
        },
        setVehicleState: () => {},
    }

    // const[vehicles,setVehicles]  = useState()
    const[vehiclesDetails,setVehiclesDetails]  = useState()
    return (
        <div>
        <VehicleContext.Provider value={{vehicles,setVehicles,vehiclesDetails,setVehiclesDetails}}> 
         {props.children}
         </VehicleContext.Provider> 
        </div>
    )
}
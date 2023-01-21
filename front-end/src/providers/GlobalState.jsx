import React, { useState } from 'react'
import { VehicleContext } from '../context/vehicleContext'

export const GlobalState = (props) => {
    const [vehicles, setVehicles] = useState()
    const [vehiclesDetails, setVehiclesDetails] = useState()
    const [errorMessage, setErrorMessage] = useState()
    const [loader, setLoader] = useState(false)
    return (
        <div>
            <VehicleContext.Provider
                value={{
                    vehicles,
                    setVehicles,
                    vehiclesDetails,
                    setVehiclesDetails,
                    errorMessage,
                    setErrorMessage,
                    loader,
                    setLoader
                }}>
                {props.children}
            </VehicleContext.Provider>
        </div>
    )
}
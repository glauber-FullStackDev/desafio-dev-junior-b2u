import React, { useState } from 'react'
import { VehicleContext } from '../context/vehicleContext'

export const GlobalState = (props) => {
    const [vehicles, setVehicles] = useState()
    const [vehiclesDetails, setVehiclesDetails] = useState()
    const [errorMessage, setErrorMessage] = useState()
    return (
        <div>
            <VehicleContext.Provider
                value={{
                    vehicles,
                    setVehicles,
                    vehiclesDetails,
                    setVehiclesDetails,
                    errorMessage,
                    setErrorMessage
                }}>
                {props.children}
            </VehicleContext.Provider>
        </div>
    )
}
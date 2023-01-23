import React, { useState } from 'react'
import CarContext from './CarContext'

function CarProvider({ children }) {
  const [ownerInfos, setOwnerInfos] = useState();
  const [carInfos, setCarInfos] = useState();

  const globalState = {
    ownerInfos,
    setOwnerInfos,
    carInfos,
    setCarInfos,
  }

  return (
    <CarContext.Provider value={globalState}>
      {children}
    </CarContext.Provider>
  )
}

export default CarProvider
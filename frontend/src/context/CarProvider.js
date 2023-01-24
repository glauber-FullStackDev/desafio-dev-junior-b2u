import React, { useState } from 'react'
import CarContext from './CarContext'

function CarProvider({ children }) {
  const [ownerId, setOwnerId] = useState();

  const globalState = {
    ownerId,
    setOwnerId,
  }

  return (
    <CarContext.Provider value={globalState}>
      {children}
    </CarContext.Provider>
  )
}

export default CarProvider
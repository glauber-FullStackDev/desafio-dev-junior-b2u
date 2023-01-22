import { createContext,useState,useEffect } from "react";

export const ItemContext = createContext({});

export const ItemProvider = ({children}) => {
    
  const [userId,setUserId] = useState('')
  const [carId,setCarId] = useState('')

  return (
    <ItemContext.Provider value={{userId,setUserId,carId,setCarId}}>
        {children}
    </ItemContext.Provider>
  )
}

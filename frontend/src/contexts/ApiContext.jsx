import { createContext,useState,useEffect } from "react";
import api from "../services/api";

export const ApiContext = createContext({});

export const ApiProvider = ({children}) => {
    
    const [cars,setCars] = useState([])
    const [users,setUsers]= useState([])
    useEffect(()=>{
      api.get('/cars')
      .then(res=>{
        setCars(res.data)
      })
    },[]);
    useEffect(()=>{
        api.get('/users')
        .then(res=>{
          setUsers(res.data)
        })
      },[]);


  return (
    <ApiContext.Provider value={{cars,setCars,users,setUsers}}>
        {children}

    </ApiContext.Provider>
  )
}

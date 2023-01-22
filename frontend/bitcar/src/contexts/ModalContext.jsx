import React, {createContext,useState} from 'react'

export const ModalContext = createContext({});

export const ModalProvider = ({children}) => {
    const [modalEditDelete,setModalEditDelete] = useState(false);
    const [modalUser,setModalUser] = useState(false);
    const [modalEditCar,setModalEditCar] = useState(false);
    const [modalEditDeleteUser,setModalEditDeleteUser] = useState(false);
    const [modalEditUser, setModalEditUser] = useState(false);
    const [modalCars,setModalCars] = useState(false)



    return (
        <ModalContext.Provider value={{modalEditUser,
         setModalEditUser,
         modalEditCar,
         setModalEditCar,
         modalUser,
         setModalUser,
         modalEditDelete,
         setModalEditDelete,
         modalEditDeleteUser,
         setModalEditDeleteUser,
         modalCars,
         setModalCars
         }}>
            {children}
        </ModalContext.Provider>
    )
}
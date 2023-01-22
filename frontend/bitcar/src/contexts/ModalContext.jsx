import React, {createContext,useState} from 'react'

export const ModalContext = createContext({});

export const ModalProvider = ({children}) => {
    const [modalEditDelete,setModalEditDelete] = useState(false);
    const [modalUser,setModalUser] = useState(false);
    const [modalEditCar,setModalEditCar] = useState(false);


    return (
        <ModalContext.Provider value={{modalEditCar,setModalEditCar,modalUser,setModalUser,modalEditDelete,setModalEditDelete}}>
            {children}
        </ModalContext.Provider>
    )
}
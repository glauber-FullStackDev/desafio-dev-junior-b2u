import React, {createContext,useState} from 'react'

export const ModalContext = createContext({});

export const ModalProvider = ({children}) => {
    const [modalEditDelete,setModalEditDelete] = useState(false);
    const [modalUser,setModalUser] = useState(false);


    return (
        <ModalContext.Provider value={{modalUser,setModalUser,modalEditDelete,setModalEditDelete}}>
            {children}
        </ModalContext.Provider>
    )
}
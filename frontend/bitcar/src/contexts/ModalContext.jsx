import React, {createContext,useState} from 'react'

export const ModalContext = createContext({});

export const ModalProvider = ({children}) => {
    const [modalEditDelete,setModalEditDelete] = useState(false);


    return (
        <ModalContext.Provider value={{modalEditDelete,setModalEditDelete}}>
            {children}
        </ModalContext.Provider>
    )
}
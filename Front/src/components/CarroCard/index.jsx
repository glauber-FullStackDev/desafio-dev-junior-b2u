import { useState, useEffect } from "react"

import { CarroEditCard } from "../../components/CarroEditCard"

import './styles.css'

export function CarroCard({ carro }) {
    const [showEdit, setShowEdit] = useState(false)

    function onShow() {
        setShowEdit(true)
    }

    function onClose() {
        setShowEdit(false)
    }

    return (
        <div className="card">
            <h3>{carro.nome}</h3>
            <button onClick={() => onShow()}>Detahes</button>
            {showEdit && (
                <div className="carro-edit-container">
                    <CarroEditCard carro={carro} />
                    <button className="btn-close" onClick={() => onClose()}>Fechar</button>
                </div>
            )}  
        
        </div>

    )
}
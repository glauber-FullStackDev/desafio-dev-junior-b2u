import { useState, useEffect } from "react"

import { DonoEditCard } from "../../components/DonoEditCard"

import './styles.css'

export function DonoCard({ dono }) {
    const [showEdit, setShowEdit] = useState(false)

    function onShow() {
        setShowEdit(true)
    }

    function onClose() {
        setShowEdit(false)
    }

    return (
        <div className="card">
            <h3>{dono.nome}</h3>
            <button onClick={() => onShow()}>Detahes</button>
            {showEdit && (
                <div className="dono-edit-container">
                    <DonoEditCard dono={dono} />
                    <button className="btn-close" onClick={() => onClose()}>Fechar</button>
                </div>
            )}
        
        </div>

    )
}
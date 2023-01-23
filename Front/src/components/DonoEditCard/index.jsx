import { useState, useEffect } from "react"

import './styles.css'

export function DonoEditCard({ dono }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');

    const url = import.meta.env.VITE_URL

    function submit(e) {
        e.preventDefault();

        axios.put(`${url}/donos/${dono.id}`, {
            nome,
            email,
            telefone
        })
        .then(() => alert("Campos editados com sucesso"))
        .catch(error => console.log(error))
    }

    function onDelete() {
        axios.delete(`${url}/donos/${dono.id}`)
        .then(() => alert("Registro deletado com sucesso"))
        .catch(error => console.log(error));
    }

    return (
        <div className="edit-card">
            <div className="edit-card-container">
                <h1>Editar</h1>
                <form onSubmit={submit}>
                    <label>
                        nome:
                        <input
                            type="text"
                            placeholder={dono.nome}
                            onChange={(e) => setNome(e.target.value)}
                            value={dono.nome}
                        />
                    </label>
                    <label>
                        email:
                        <input
                            type="text"
                            placeholder={dono.email}
                            onChange={(e) => setEmail(e.target.value)}
                            value={dono.email}
                        />
                    </label>
                    <label>
                        telefone:
                        <input
                            type="text"
                            placeholder={dono.telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                            value={dono.telefone}
                        />
                    </label>
                    <button type="submit">Editar</button>
                </form>
                <button className="btn-excluir" onClick={onDelete}>Excluir Registro</button>
                
            </div>
        </div>

    )
}
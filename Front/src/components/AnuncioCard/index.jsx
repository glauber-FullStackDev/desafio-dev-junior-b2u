import { Link } from "react-router-dom"

import { FaStar } from "react-icons/fa"

import './styles.css'

export function AnuncioCard({ anuncio, showLink = true }) {

    return (
        <div className="anuncio-card">
            <img src={`data:image/jpg;base64,${anuncio.foto_carro}`} />
            <h2>{anuncio.nome}</h2>
            <p>
                <FaStar /> {anuncio.marca}
            </p>
            {showLink && <Link to={`/anuncio/${anuncio.id}`}>Detalhes</Link>}
        </div>
    )
}
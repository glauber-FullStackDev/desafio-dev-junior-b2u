import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import { AnuncioCard } from "../../components/AnuncioCard"

import '../styles/global-pages.css'
import './styles.css'

const url = import.meta.env.VITE_URL

export function Home() {
    const [carros, setCarros] = useState([]);

    useEffect(() => {
        const  carrosURL = `${url}/carros`;

        async function getCarros(url) {
            const response = await fetch(url);
            const data = await response.json();

            setCarros(data);
        }

        getCarros(carrosURL);
    }, [])

    return (
        <div className="container">
            <h2 className="title">Anuncios de Carros</h2>
            <div className="anuncio-container">
                {carros.length === 0 && 
                <p className="link-p">
                    Ainda não há anuncios 
                    <p>
                        <Link to={"anunciar"}>clique aqui para anunciar agora</Link>
                    </p>
                </p>}
                {carros.length > 0 && carros.map(anuncio => <AnuncioCard key={anuncio.id} anuncio={anuncio} />)}
            </div>
        </div>
    )
}

// Uma das maiores referências que temos que ter para componentizar algo é imaginar se iremos reutilizar aquilo dentro de alguma outra página ou até na mesma página. Caso contrário, não há necessidade de componentizar esse elemento
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

import { AnuncioCard } from "../../components/AnuncioCard"

const url = import.meta.env.VITE_URL

export function Search() {
    const [ searchParams ] = useSearchParams()
    const query = searchParams.get("q")

    const [anuncios, setAnuncios] = useState([])
    
    useEffect(() => {
        axios.post(`${url}/carros/busca/${query}`)
        .then(response => {
            setAnuncios(response.data)
        })
        .catch(error => console.log(error)) 

    }, [query])


    return (
        <div className="container">
            <h2 className="title">Resultados para <span className="query-text">{query}</span> </h2>
            <div className="anuncio-container">
                {anuncios.length === 0 && <p>Carregando...</p>}
                {anuncios.length > 0 && anuncios.map(item => <AnuncioCard key={item.id} anuncio={item} />)}
            </div>
        </div>
    )
}
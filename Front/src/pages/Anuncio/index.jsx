import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { BsGraphUp, BsFileEarmarkTextFill, BsEnvelopeFill } from 'react-icons/bs'
import { AiFillPhone, AiOutlineUser, AiOutlineStar } from 'react-icons/ai'

import { AnuncioCard } from "../../components/AnuncioCard"

import './styles.css'

const url = import.meta.env.VITE_URL

export function Anuncio() {
    const { id } = useParams()
    const [anuncio, setAnuncio] = useState()

    useEffect(() => {
        const anuncioURL = `${url}/carros/${id}` 

        async function getAnuncio(url) {
            const response = await fetch(url)
            const data = await response.json()

            setAnuncio(data)
        }

        getAnuncio(anuncioURL)

    }, [])

    return (
        <div className="anuncio-page">
            {anuncio && (
                <>
                    <AnuncioCard anuncio={anuncio} showLink={false} />
                    <p className="tagline">{anuncio.nome}</p>
                    <div className="info-container" >
                        <div className="info">
                            <h3>
                                <AiOutlineStar /> Marca:
                            </h3>
                            <p>{anuncio.marca}</p>
                        </div>
                        <div className="info">
                            <h3>
                                <BsGraphUp /> Ano de fabricação:
                            </h3>
                            <p>{anuncio.ano_fabricacao}</p>
                        </div>
                        <div className="info">
                            <h3>
                                <AiOutlineUser /> Dono do anúncio:
                            </h3>
                            <p>{anuncio.dono_carro.nome}</p>
                        </div>
                        <div className="info">
                            <h3>
                                <AiFillPhone /> Telefone para contato:
                            </h3>
                            <p>{anuncio.dono_carro.telefone}</p>
                        </div>
                        <div className="info">
                            <h3>
                                <BsEnvelopeFill /> email:
                            </h3>
                            <p>{anuncio.dono_carro.email}</p>
                        </div>
                        <div className="info-description">
                            <h3>
                                <BsFileEarmarkTextFill /> Descrição:
                            </h3>
                            <p>{anuncio.descricao}</p>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import { DonoCard } from "../../components/DonoCard"
import { CarroCard } from "../../components/CarroCard"

import '../styles/global-pages.css'
import './styles.css'

const url = import.meta.env.VITE_URL

export function Registros() {
    const [donos, setDonos] = useState([]);
    const [carros, setCarros] = useState([]);

    useEffect(() => {
        const  donosURL = `${url}/donos`;
        const  carrosURL = `${url}/carros`;

        async function getDonos(url) {
            const response = await fetch(url);
            const data = await response.json();

            setDonos(data);
        }

        async function getCarros(url) {
            const response = await fetch(url);
            const data = await response.json();

            setCarros(data);
        }

        getDonos(donosURL);
        getCarros(carrosURL);

    }, [])

    return (
        <div className="container">
            <h2 className="title">Registros</h2>
            <div className="container-card">
                <h3>Donos:</h3>
                {donos.length > 0 && donos.map((dono) => <DonoCard dono={dono} /> )}
                
                <div className="link-container">
                    <Link className="link" to={"/dono-registro"}>Registre-se como um Dono</Link>
                </div>

                <h3>Carros:</h3>
                {carros.length > 0 && carros.map((carro) => <CarroCard carro={carro} /> )}
                
                <div className="link-container">
                    <Link className="link" to={"/anunciar"}>Registre seu anúncio de Carro</Link>
                </div>

            </div>
        </div>
    )
}
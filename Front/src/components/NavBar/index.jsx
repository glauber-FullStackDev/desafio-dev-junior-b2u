import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiSearchAlt2 } from 'react-icons/bi'
import { AiFillCar } from 'react-icons/ai'

import './styles.css'

export function NavBar() {
    const [ search, setSearch ] = useState('')
    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault()
        navigate(`/search?q=${search}`)
        setSearch('')
    }

    return (
        <nav id="navbar">
            <h2>
                <Link to="/"> <AiFillCar /> CarAdHouse</Link>
            </h2>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <Link to="registros">Registros</Link>
                    </li>
                    <li>
                        <Link to="anunciar">Anunciar</Link>
                    </li>
                </ul>
                <input 
                    type="text" 
                    placeholder="Busque um Anuncio" 
                    onChange={event => setSearch(event.target.value)}
                    value={search}
                />

                <button type="submit">
                    <BiSearchAlt2 />
                </button>
            </form>
        </nav>
    )
}

/*
    onSubmit:                       (evento de envio, 'submit: enviar')
    o onSubmit é um evento java script comum como o onclick por exempo, porém com suas funcionalidades semânticas específicas. o onSubmit é usado para manipular formulários e assim que o botão 'type submit' for clicado, o evento 'onSubmit' é disparado. Lembrando que o botão type submit tem que ser filho da tag form para podermos passar o evento dentro da tag e ela ser diparada assim que clicada no seu respectivo botão.

    a sintaxe do jsx esconde a passagem do parâmetro que fazemos na função e escrevemos dentro do evento onSubmit mas não se engane, ela está lá. 

    event.preventDefault():         (traduzindo: 'evitar padrão')
    o parametro da função handleSubmit(event) é preenchido através do onSubmit, que é um evento e cada evento tem uma função, seja onClick ou um checkbox, etc. A função complementar seguida do evento, essa que estamos analisando, a preventDefault faz literalmente o que o nome diz, seu evento continua funcionando normalmente mas evitamos seu comportamento padrâo, no checkbox por exemplo, como foi explicado no site do MDN, ele continua funcionando mas sua caixinha de 'check' não é preenchida com o 'v'. No caso do nosso onSubmit, o formulário é enviado através de parametros HTTP porém sua página não faz o reload, o reload geralmente é feito por padrão.

    useNavigate():
    Hook do react-router-dom que armazena em uma variável uma função 'navigate' que em seu parâmetro escreve uma string específica no HTTP, gerando um parâmetro HTTP,

    propriedade value do input text:
    é literalmente o valor default(padrao) do input, ele é inserido lá com a a variável de estado 'search', assim que chamamos a função no onSubmit, usamos sua função set para deixar a variável search vazia refletindo dentro do valor(value) do input text 
*/
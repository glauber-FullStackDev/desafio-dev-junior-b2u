interface props {
    texto: string
}


const Titulo = ({texto} : props) => {
    return(<h2>{ texto }</h2>)
}

export default Titulo;
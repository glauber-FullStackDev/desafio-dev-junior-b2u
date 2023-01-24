import { Link } from "react-router-dom";

function NoPage() {
    return (
        <div className="text-center bg-white-800 p-60 dark:bg-slate-800">
            <h1 className="mb-10">Oops! Página não encontrada.</h1>
            <Link to="/"> <button>Voltar </button></Link>
        </div>
    )
}

export default NoPage

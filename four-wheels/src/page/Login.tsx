import { useState } from 'react'
import SimpleNav from '../components/SimpleNav'
import Swal from 'sweetalert2'
function Login() {
    const [data, setData] = useState({ identifier: 'test@gmail.com', password: '123456' })
    const [message, setMessage] = useState('')
    const Login = () => {
        fetch(`${import.meta.env.VITE_URL}/auth?identifier=${data.identifier}&password=${data.password}`)
            .then((res) => res.json())
            .then((data) => {
                if (!data.length) {
                    setMessage("Favor tentar novamente")
                } else {
                    sessionStorage.setItem('user', `${JSON.stringify(data)}`)
                    window.location.href = "/"
                }
            })
            .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Erro!',
                    text: `Houve um erro ao logar! ${err.message}`,
                    footer: '<a href="/">Voltar</a>'
                })
            })
    }
    return (
        <>
            <SimpleNav name="Logar" />
            <div className="flex justify-center m-40">
                <div className="w-full max-w-xs">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 dark:bg-zinc-800">
                        {/* <h1 className="text-2xl text-center mb-3 text-slate-50 italic font-mono text-zinc-400">Login</h1> */}
                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input defaultValue="test@gmail.com" onChange={(e) => { setData({ ...data, identifier: e.target.value }) }} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="exemplo@company.com" required />
                        </div>
                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Senha</label>
                            <input defaultValue="123456" onChange={(e) => { setData({ ...data, password: e.target.value }) }} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
                        </div>
                        <p className="text-red-500 text-xs italic">{message}</p>
                        <div className="flex items-center justify-between">
                            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/">
                                Voltar
                            </a>
                            <button onClick={() => { Login() }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Login
                            </button>
                        </div>
                    </form>
                    <p className="text-center text-gray-500 text-xs">
                        &copy;2020
                    </p>
                </div>
            </div>
        </>
    )
}

export default Login

import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import SimpleNav from '../components/SimpleNav'
import Swal from 'sweetalert2'
function RegisterUser() {
    const [data, setData] = useState({ identifier: '', password: '' })
    const [confirmPassword, setConfirmPassword] = useState('')
    const [validation, setValidation] = useState(true)
    console.log(confirmPassword.length)
    useEffect(() => {
        if (data.password == confirmPassword && data.password.length > 1) {
            setValidation(false)
        } else {
            setValidation(true)
        }
    }, [data.password, confirmPassword])
    const Signup = () => {
        fetch(`${import.meta.env.VITE_URL}/auth`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(data)
        })
            .then(function (res) {
                if (res.status == 200 || res.status == 201) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Sucesso',
                        text: 'Usuário cadastrado com sucesso!',
                        footer: '<a href="/">Voltar</a>'
                    })
                    setTimeout(() => {
                        window.location.href = "/"
                    }, 5000)
                }
            })
            .catch(function (res) {
                Swal.fire({
                    icon: 'error',
                    title: 'Erro',
                    text: `Algo deu errado! ${res}`,
                    footer: '<a href="/">Voltar</a>'
                })
            })
    }
    return (
        <>
            <SimpleNav name="Cadastrar novo usuário" />
            <div className="flex justify-center m-20">
                <div className="w-full max-w-xs">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 dark:bg-zinc-800">
                        {/* <h1 className="text-2xl text-center mb-3 text-slate-50 italic font-mono text-zinc-400">Login</h1> */}
                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input onChange={(e) => { setData({ ...data, identifier: e.target.value }) }} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="exemplo@company.com" required />
                        </div>
                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Senha</label>
                            <input defaultValue="" onChange={(e) => { setData({ ...data, password: e.target.value }) }} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
                        </div>
                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirmar senha</label>
                            <input defaultValue="" onChange={(e) => { setConfirmPassword(e.target.value) }} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
                        </div>
                        {confirmPassword != data.password && confirmPassword.length > 0 ? <p className="text-red-500 text-xs italic">Senhas não conferem</p> : null}
                        <div className="flex items-center justify-between">
                            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/">
                                Voltar
                            </a>
                            <button disabled={validation} onClick={() => { Signup() }} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Cadastrar
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

export default RegisterUser

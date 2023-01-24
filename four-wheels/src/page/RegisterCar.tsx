import { useState } from 'react'
import SimpleNav from '../components/SimpleNav'
import Swal from 'sweetalert2'
type Values = { model: string, brand: string, description: string, fabrication: string, name: string, email: string, phone: string }
function RegisterCar() {
    const [data, setData] = useState({ model: '', brand: '', description: '', fabrication: '', name: '', email: '', phone: '', price: '' })

    const RegisterCar = () => {
        fetch(`${import.meta.env.VITE_URL}/adverts`,
            {
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
                        title: 'Status',
                        text: 'Anúncio cadastrado com sucesso!',
                        footer: '<a href="/">Voltar</a>'
                    })
                    setTimeout(() => {
                        window.location.href = "/"
                    }, 3000)

                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Erro!',
                        text: 'Houve um erro ao registrar!',
                        footer: '<a href="/">Voltar</a>'
                    })
                }
            })
            .catch(function (res) {
                Swal.fire({
                    icon: 'error',
                    title: 'Erro!',
                    text: 'Houve um erro ao registrar!',
                    footer: '<a href="/">Voltar</a>'
                })
            })
    }
    return (
        <>
            <SimpleNav name="Anunciar carro" />
            <div className="flex justify-center mt-5">
                <div className="w-full max-w-xs">
                    <form className="w-full max-w-lg bg-white shadow-md rounded px-4 pt-6 pb-8 mb-4 dark:bg-zinc-800">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide dark:text-white text-xs font-bold mb-2" >
                                    Marca do carro
                                </label>
                                <input onChange={(e) => { setData({ ...data, brand: e.target.value }) }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" placeholder="ex: Tesla" />
                                {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="dark:text-white block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Modelo
                                </label>
                                <input onChange={(e) => { setData({ ...data, model: e.target.value }) }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" placeholder="Model S" />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="dark:text-white block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                    Descrição
                                </label>
                                <input onChange={(e) => { setData({ ...data, description: e.target.value }) }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="grid-password" type="text" placeholder="" />
                                {/* <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide dark:text-white text-xs font-bold mb-2" >
                                    Fabricação
                                </label>
                                <input onChange={(e) => { setData({ ...data, fabrication: e.target.value }) }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="grid-first-name" type="date" />
                                {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="dark:text-white block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Seu nome
                                </label>
                                <input onChange={(e) => { setData({ ...data, name: e.target.value }) }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" placeholder="Digite seu nome" />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide dark:text-white text-xs font-bold mb-2" >
                                    Email
                                </label>
                                <input onChange={(e) => { setData({ ...data, email: e.target.value }) }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="grid-first-name" type="mail" placeholder="seuemail@company.com" />
                                {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="dark:text-white block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Telefone
                                </label>
                                <input onChange={(e) => { setData({ ...data, phone: e.target.value }) }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" placeholder="(##) ####-####" />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="dark:text-white block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                    preço do carro
                                </label>
                                <input onChange={(e) => { setData({ ...data, price: e.target.value }) }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="grid-password" type="text" placeholder="" />
                                {/* <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/">
                                Voltar
                            </a>
                            <button onClick={() => { RegisterCar() }} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
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

export default RegisterCar

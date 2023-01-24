import React from 'react'
import moment from 'moment'
type CardValues = { model: string, brand: string, description: string, fabrication: string, name: string, email: string, phone: string, createdAt: string, price: string, id: number }

export default function Card({ model, brand, description, fabrication, name, email, phone, createdAt, price, id }: CardValues) {
    const values = { id, model, brand, description, fabrication, name, email, phone, createdAt, price }
    return (
        <div onClick={() => { sessionStorage.setItem('car', `${JSON.stringify(values)}`); window.location.href = 'edit' }} className="dark:bg-zinc-900 ml-3 w-90 max-w-sm rounded overflow-hidden shadow-lg mt-8 cursor-pointer">
            <img className="w-full" width="1" src="/tesla.png" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{model}, {brand} de {moment(fabrication).format('DD/MM/YYYY')}</div>
                <p className="text-gray-700 text-base dark:text-white">
                    {description}.
                </p>
                <div className="mt-3">
                    <span className=" text-center inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Valor: {price}</span>
                </div>
                <span>Anuncio de: {createdAt}</span>
            </div>
            <div className="px-3 pt-6 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{name}</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{email}</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{phone}</span>
            </div>
        </div>
    )
}

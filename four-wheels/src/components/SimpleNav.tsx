import React from 'react'
import { Link } from "react-router-dom";
function Nav({ name }: any) {
    return (
        <div>
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-zinc-900">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <Link to="/"><a className="flex items-center">
                        <img src="/wheel.png" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{name}</span>
                    </a></Link>
                </div>
            </nav >
        </div>
    )
}

export default Nav
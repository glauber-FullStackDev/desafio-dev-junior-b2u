import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-9xl font-bold tracking-widest">404</h1>
      <div className="bg-blue-600 text-white px-2 text-sm rotate-12 absolute">
        Page Not Found
      </div>
      <Link
        to="/"
        className="mt-8 px-4 py-3 text-white bg-blue-600 hover:bg-blue-700"
      >
        Go home
      </Link>
    </section>
  )
}

export default NotFound

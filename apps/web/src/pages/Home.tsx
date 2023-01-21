import React from 'react'
import { Link } from 'react-router-dom'

import { Layout } from '@/components'

const Home = () => {
  const isAuthenticated = localStorage.getItem('@seller')

  return (
    <Layout>
      <section>
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="text-center">
            <h1
              className="text-5xl md:text-6xl font-bold tracking-tighter mb-8"
              data-aos="zoom-y-out"
            >
              The best way to
              <span className="mx-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                sell
              </span>
              your car
            </h1>
            <Link
              className="my-16 px-4 py-3 text-white bg-blue-600 hover:bg-blue-700"
              to={!isAuthenticated ? '/start' : 'sell'}
            >
              {!isAuthenticated ? 'Start now' : 'Go to dashboard'}
            </Link>
          </div>
        </div>
        <img
          className="w-full h-full object-cover"
          src="/car.jpg"
          alt="Hero"
          loading="lazy"
        />
      </section>
    </Layout>
  )
}

export default Home

import React from 'react'
import { Link } from 'react-router-dom'

import { Layout } from '@/components'
import Cars from '@/components/organisms/Cars'

const Sell = () => {
  return (
    <Layout>
      <section className="pt-32 pb-12 md:pt-40 md:pb-20">
        <div className="flex items-center justify-between">
          <h1
            className="text-5xl md:text-6xl font-bold tracking-tighter mb-8"
            data-aos="zoom-y-out"
          >
            Sell
          </h1>
          <Link
            to="/sell/new"
            className="px-4 py-3 text-white bg-blue-600 hover:bg-blue-700"
          >
            New
          </Link>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <Cars />
        </div>
      </section>
    </Layout>
  )
}

export default Sell

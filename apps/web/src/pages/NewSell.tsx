import React from 'react'
import { Link } from 'react-router-dom'

import { Layout } from '@/components'
import SellForm from '@/components/organisms/SellForm'

const NewSell = () => {
  return (
    <Layout>
      <section className="pt-32 pb-12 md:pt-40 md:pb-20">
        <Link to="/sell">⬅️ Go back</Link>

        <h1
          className="mt-4 text-5xl md:text-6xl font-bold tracking-tighter mb-8"
          data-aos="zoom-y-out"
        >
          New
        </h1>
        <SellForm />
      </section>
    </Layout>
  )
}

export default NewSell

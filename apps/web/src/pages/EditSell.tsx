import React from 'react'
import { Link, useParams } from 'react-router-dom'

import { Layout } from '@/components'
import SellForm from '@/components/organisms/SellForm'
import { useQuery } from '@tanstack/react-query'

const EditSell = () => {
  const { id } = useParams()

  const { data, status } = useQuery(['car', id], async () => {
    const response = await fetch(`http://localhost:3001/car/${id}`)
    return response.json()
  })

  if (status === 'loading') return <div>Loading...</div>

  return (
    <Layout>
      <section className="pt-32 pb-12 md:pt-40 md:pb-20">
        <Link to="/sell">⬅️ Go back</Link>

        <h1
          className="mt-4 text-5xl md:text-6xl font-bold tracking-tighter mb-8"
          data-aos="zoom-y-out"
        >
          {data?.name}
        </h1>

        <SellForm car={data} />
      </section>
    </Layout>
  )
}

export default EditSell

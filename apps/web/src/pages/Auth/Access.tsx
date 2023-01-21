import React from 'react'

import { Layout, SignInForm } from '@/components'

const Access = () => {
  return (
    <Layout>
      <section className="pt-32 pb-12 md:pt-40 md:pb-20">
        <h1
          className="text-5xl md:text-6xl font-bold tracking-tighter mb-8"
          data-aos="zoom-y-out"
        >
          Access
        </h1>
        <SignInForm />
      </section>
    </Layout>
  )
}

export default Access

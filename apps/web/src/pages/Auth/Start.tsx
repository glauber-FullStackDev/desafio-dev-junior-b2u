import React from 'react'

import { SignUpForm, Layout } from '@/components'
import { useLocalStorage } from '@/hooks/localStorage'

const Auth = () => {
  const [user] = useLocalStorage('@seller', {})

  return (
    <Layout>
      <section className="pt-32 pb-12 md:pt-40 md:pb-20">
        <h1
          className="text-5xl md:text-6xl font-bold tracking-tighter mb-8"
          data-aos="zoom-y-out"
        >
          Start now
        </h1>
        <SignUpForm />
      </section>
    </Layout>
  )
}

export default Auth

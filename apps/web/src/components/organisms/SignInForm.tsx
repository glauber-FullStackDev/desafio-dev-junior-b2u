import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { useLocalStorage } from '@/hooks/localStorage'
import { SignInValues } from '@/lib/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { signInBody } from 'validation'

import { FormInput } from '../molecules'

const SignInForm = () => {
  const [, setUser] = useLocalStorage('@seller', null)
  const navigate = useNavigate()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInBody),
  })

  const signIn = async (values: SignInValues) => {
    const response = await fetch('http://localhost:3001/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    })
    const seller = await response.json()

    if (seller.id) {
      setUser(seller)
      navigate('/sell')
    } else {
      toast.error('Invalid email or password')
    }
  }

  const { mutate } = useMutation({
    mutationFn: (values: SignInValues) => signIn(values),
  })

  return (
    <form onSubmit={handleSubmit(values => mutate(values as SignInValues))}>
      <FormInput
        type="text"
        id="email"
        label="E-mail"
        register={register}
        errors={errors}
      />
      <FormInput
        type="password"
        id="password"
        label="Password"
        register={register}
        errors={errors}
      />
      <div className="flex flex-col">
        <small>
          Still not haven an account? Start
          <Link to="/start" className="ml-1 underline decoration-wavy">
            here
          </Link>
        </small>
        <button
          type="submit"
          className="self-end px-4 py-3 text-white bg-blue-600 hover:bg-blue-700"
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default SignInForm

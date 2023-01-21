import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { useLocalStorage } from '@/hooks/localStorage'
import { SignUpValues } from '@/lib/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { signUpBody } from 'validation'

import { FormInput } from '../molecules'

const SignUpForm = () => {
  const [, setUser] = useLocalStorage('@seller', {})
  const navigate = useNavigate()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignUpValues>({
    resolver: zodResolver(signUpBody),
  })

  const signUp = async (values: SignUpValues) => {
    const response = await fetch('http://localhost:3001/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    })
    const newSeller = await response.json()

    if (newSeller.id) {
      setUser(newSeller)
      navigate('/sell')
    } else {
      toast.error('Could not create this seller')
    }
  }

  const { mutate } = useMutation({
    mutationFn: (values: SignUpValues) => signUp(values),
  })

  return (
    <form onSubmit={handleSubmit(values => mutate(values))}>
      <FormInput id="name" label="Name" register={register} errors={errors} />
      <FormInput
        id="email"
        label="E-mail"
        register={register}
        errors={errors}
      />
      <FormInput
        id="phone"
        label="Phone Number"
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
          Already have an account? Access
          <Link to="/access" className="ml-1 underline decoration-wavy">
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

export default SignUpForm

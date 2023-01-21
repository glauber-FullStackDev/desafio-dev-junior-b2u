import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { Car } from '@/lib/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { createCarBody, updateCarBody } from 'validation'

import { FormInput } from '../molecules'

const SellForm = ({ car }: { car?: any }) => {
  const navigate = useNavigate()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: car ? car : null,
    resolver: zodResolver(!car?.id ? createCarBody : updateCarBody),
  })

  const handleCarSubmit = async (values: Car) => {
    const response = await fetch(
      !car?.id
        ? 'http://localhost:3001/car'
        : `http://localhost:3001/car/${car?.id}`,
      {
        method: !car?.id ? 'POST' : 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      },
    )
    const carData = await response.json()

    if (carData) navigate('/sell')
    return carData
  }

  const { mutate } = useMutation({
    mutationFn: handleCarSubmit,
  })

  return (
    <form onSubmit={handleSubmit(values => mutate(values))}>
      <FormInput id="name" label="Name" register={register} errors={errors} />
      <FormInput id="brand" label="Brand" register={register} errors={errors} />
      <FormInput
        id="model_year"
        label="Model Year"
        register={register}
        errors={errors}
      />
      <FormInput
        id="description"
        label="Description"
        register={register}
        errors={errors}
      />
      <button
        type="submit"
        className="self-end px-4 py-3 text-white bg-blue-600 hover:bg-blue-700"
      >
        {!car?.id ? 'Create' : 'Update'}
      </button>
    </form>
  )
}

export default SellForm

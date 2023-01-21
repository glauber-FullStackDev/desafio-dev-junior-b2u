import React, { forwardRef } from 'react'
import {
  DeepMap,
  FieldError,
  FieldValues,
  UseFormRegister,
} from 'react-hook-form'

type FormInputProps<TFormValues extends FieldValues> = {
  id: string
  type?: 'text' | 'password'
  label: string
  register?: UseFormRegister<TFormValues>
  errors?: Partial<DeepMap<TFormValues, FieldError>>
}

const FormInput = forwardRef(
  <T extends FieldValues>(
    { type = 'text', id, register, label, errors }: FormInputProps<T>,
    ref,
  ) => {
    return (
      <div className="relative z-0 w-full mb-6 group">
        <input
          ref={ref}
          aria-invalid={!!errors}
          type={type}
          id={id}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          autoComplete="off"
          {...(register && register(id as any))}
        />
        <label
          htmlFor={id}
          className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          {label}
        </label>

        {errors ? (
          <small className="text-red-600">{errors[id]?.message}</small>
        ) : null}
      </div>
    )
  },
)

FormInput.displayName = 'form_input'

export default FormInput

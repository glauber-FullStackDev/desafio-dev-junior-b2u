import styles from './styles.module.scss'
import Header from '../../../components/Header'
import { api } from '../../../../services/api'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useState } from 'react'
import { CircularProgress } from '@mui/material'
import { GetServerSideProps } from 'next'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import { Car } from '@/components/CarList'

export type CarEditProps = {
  slug: string
  car: Car
}

export default function CarEdit({slug, car} : CarEditProps){
  const { register, handleSubmit, reset, setValue} = useForm()
  const [isLoaded, setIsLoaded] = useState(false)
  const [name, setName] = useState(car.name)
  const [brand, setBrand] = useState(car.brand)
  const [description, setDescription] = useState(car.description)
  const [manufactureYear, setManufactureYear] = useState(car.manufactureYear)
  const [ownerName, setOwnerName] = useState(car.owner.owner_name)
  const [email, setEmail] = useState(car.owner.email)
  const [telephone, setTelephone] = useState(car.owner.telephone)

  async function handleUpdateCar(data:any) {
    setIsLoaded(!isLoaded)
    try {
      const res = await api.patch(`car/${slug}`, data)

      setIsLoaded(!!isLoaded)
      if(res.status === 204) {
        toast.success('Carro editado com sucesso!')
        reset()
      } else if (res.status===500){
        toast.error('Erro no servidor!')
      }
    }catch(err) {
      toast.error(`${err}`);
      
      setIsLoaded(!!isLoaded)
    }
  }

  return (
    <div className={styles.carEditContainer}>
      <Header/>

      <div className={styles.editCar}>
        <form className={styles.form} onSubmit={handleSubmit(handleUpdateCar)}>
            <h2>Editar Carro</h2>
            <label htmlFor="name">Nome</label>
            <input 
              {...register('name')}
              id="name" 
              type="text"
              autoComplete="name" 
              required
              value={name} 
              onChange={e => setName(e.target.value)} 
              className={styles.inputName}
            />
            <label htmlFor="brand">Marca</label>
            <input 
              {...register('brand')}
              id="brand" 
              type="text" 
              autoComplete="email" 
              required
              value={brand} 
              onChange={e => setBrand(e.target.value)} 
              className={styles.inputBrand}
            />
            <label htmlFor="year">Ano</label>
            <input 
              {...register('manufactureYear')}
              id="manufactureYear" 
              type="number" 
              autoComplete="year" 
              required
              value={manufactureYear} 
              onChange={e => setManufactureYear(Number(e.target.value))} 
              className={styles.inputYear}
            />
            <label htmlFor="decription">Descrição</label>
            <textarea 
              {...register('description')}
              id="description" 
              autoComplete="descripton"
              maxLength={300}
              required 
              value={description}
              onChange={e => setDescription(e.target.value)} 
              className={styles.inputDescription}
            />

            <h2> Dados do proprietário </h2>

            <label htmlFor="ownerName">Nome</label>
            <input
              {...register('owner_name')}
              id="owner_name" 
              type="text"
              autoComplete="ownername" 
              required
              value={ownerName} 
              onChange={e => setOwnerName(e.target.value)} 
              className={styles.inputOnwerName}
            />

            <label htmlFor="email">Email</label>
            <input
            {...register('email')}
              id="email" 
              type="email" 
              autoComplete="email" 
              required
              value={email}
              onChange={e => setEmail(e.target.value)} 
              className={styles.email}
            />

            <label htmlFor="name">Telefone</label>
            <input
              {...register('telephone')}
              id="telephone" 
              type="text" 
              autoComplete="telephone" 
              required
              value={telephone} 
              onChange={e => setTelephone(e.target.value)} 
              className={styles.inputTel}
            />
            {
            !isLoaded ? <button type="submit">Editar</button> : <div className={styles.progress}><CircularProgress color='primary'/></div>
            }
        </form>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({params}: Params) => {
  const { slug } = params

  const carData = await api.get(`car/${slug}`)
  const car = carData.data 

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return {
    props: {
      car,
      slug
    }
  }
}
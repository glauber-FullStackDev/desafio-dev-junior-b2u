import { Car } from '@/components/CarList'
import Header from '@/components/Header'
import { CircularProgress } from '@mui/material'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { api } from 'services/api'
import styles from './styles.module.scss'

export default function CreateCar() {
  const { register, handleSubmit, reset } = useForm()
  const [isLoaded, setIsLoaded] = useState(false)

  async function handleCreateCar(data:any) {
    setIsLoaded(!isLoaded)
    try {
      const res = await api.post('car', data)

      setIsLoaded(!!isLoaded)
      if(res.status === 204) {
        toast.success('Carro registrado com sucesso!')
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
    <div className={styles.createCarContainer}>
      <Header/>

      <div className={styles.createCar}>
        

        <form className={styles.form} onSubmit={handleSubmit(handleCreateCar)}>
          <h2 className={styles.createCarTitle}> Cadastrar carros</h2>
          <label htmlFor="name">Nome</label>
          <input 
            {...register('name')}
            id="name" 
            type="text" 
            autoComplete="name" 
            required 
            className={styles.inputName}
          />
          <label htmlFor="brand">Marca</label>
          <input 
            {...register('brand')}
            id="brand" 
            type="text" 
            autoComplete="email" 
            required 
            className={styles.inputBrand}
          />
          <label htmlFor="year">Ano</label>
          <input 
            {...register('manufactureYear')}
            id="manufactureYear" 
            type="text" 
            autoComplete="year" 
            required 
            className={styles.inputYear}
          />
          <label htmlFor="decription">Descrição</label>
          <textarea 
            {...register('description')}
            id="description" 
            autoComplete="descripton"
            maxLength={300}
            required 
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
            className={styles.inputOnwerName}
          />

          <label htmlFor="email">Email</label>
          <input
           {...register('email')}
            id="email" 
            type="email" 
            autoComplete="email" 
            required 
            className={styles.email}
          />

          <label htmlFor="name">Telefone</label>
          <input
            {...register('telephone')}
            id="telephone" 
            type="text" 
            autoComplete="telephone" 
            required 
            className={styles.inputTel}
          />
          {
          !isLoaded ? <button type="submit">Cadastrar</button> : <div className={styles.progress}><CircularProgress color='primary'/></div>
          }
        </form>
      </div>
    </div>
  )
}
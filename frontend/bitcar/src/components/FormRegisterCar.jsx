import Button from './Button'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import api from '../services/api'
import { useContext,useEffect } from 'react'
import {ApiContext} from '../contexts/ApiContext'
import { toast } from 'react-toastify'

const FormRegisterCar = () => {

  const {users,setUsers,setCars} = useContext(ApiContext);
  useEffect(()=>{
      api.get('/users')
      .then(res=>setUsers(res.data))
  },[users])

  const schema = yup.object({
    name:yup.string().required(),
    ano_fabri:yup.string().required(),
    marca:yup.string().required(),
    descricao:yup.string().required(),
    user:yup.string().required(),
  }).required()

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmitFunction = (data) => {
    
    const userId = users.filter(user => {
     return user.name == data.user
    })[0].id
    const dataSent = {
      name:data.name,
      marca:data.marca,
      ano_fabri:data.ano_fabri,
      descricao:data.descricao,
      donoId:userId
    }
    console.log(dataSent);

    api.post('/cars',dataSent)
    .then(res=>{
      return toast.success('Carro criado com sucesso')
    })
    .catch(err =>toast.error('Erro na criação do carro'));
   
  }

  return (
    <>
        
        <form  onSubmit={handleSubmit(onSubmitFunction)} className='flex flex-col gap-y-2 mt-16 bg-white p-4 items-center sm:items-start'>
        <h2 className='mb-8 text-2xl text-center sm:text-left sm:text-3xl font-bold '>Criar carro</h2>
                      <label className='font-medium text-gray-three text-left'>Nome</label>
                      <input {...register('name')} type='text' placeholder='Prisma' className='bg-gray-eleven w-1/2 p-2 outline-none border rounded focus:border-primary-dark mb-2 placeholder-gray-six text-gray-two text-[14px]'/>
                      <p className='text-sm text-[#8F1F1F]'>{errors.name ? 'O nome do carro é obrigatório' : ''}</p>
                    <label className='font-medium text-gray-three'>Marca</label>
                    <input {...register('marca')}  type='text' placeholder='Chevrolet' className='bg-gray-eleven p-2 w-1/2 outline-none border rounded focus:border-primary-dark mb-2 text-[14px] placeholder-gray-six text-gray-two'/>
                    <p className='text-sm text-[#8F1F1F]'>{errors.marca ? 'A marca é obrigatória' : ''}</p>
                    <label className='font-medium text-gray-three'>Ano de fabricação</label>
                    <input  {...register('ano_fabri')}  type='text' placeholder='2018' className='bg-gray-eleven p-2  w-1/2 outline-none border rounded focus:border-primary-dark mb-2 placeholder-gray-six text-[14px] text-gray-two'/>
                    <p className='text-sm text-[#8F1F1F]'>{errors.ano_fabri ? 'O ano de fabricação é obrigatório' : ''}</p>
                    <label className='text-gray-three font-medium'>Descrição</label>
                    <textarea  {...register('descricao')} placeholder=' Eficiente, oferece uma experiência bem melhor de condução do que a dos concorrentes com câmbio automatizado' className='resize-none border placeholder-gray-six focus:border-primary-dark outline-none w-1/2 rounded p-2 h-20 text-[14px] bg-gray-eleven'></textarea>
                    <p className='text-sm text-[#8F1F1F]'>{errors.descricao ? 'A descrição é obrigatória' : ''}</p>
                    <label className='font-medium'>Dono</label>
                    <select {...register('user')} className='w-1/2 p-2 border outline-none rounded overflow-y-scroll bg-gray-eleven text-[14px] focus:border-primary-dark'>
                        
                        {
                          users.map(user => <option key={user.id} className='text-gray-two'>
                            {user.name}
                      </option>)
                        }

                    </select>
                    <div className='mt-4 justify-center sm:justify-start items-center flex'>
                    <Button text={'Criar carro'} type={'submit'}/>
                    
                    </div>
                  </form>

    </>
  )
}

export default FormRegisterCar
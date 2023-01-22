
import Button from './Button'
import {ItemContext} from '../contexts/ItemContext'
import { useContext} from 'react'
import api from '../services/api'
import {useForm} from 'react-hook-form'

const ModalEditCarItem = ({modal,setModal}) => {
  const {carId} = useContext(ItemContext);
  const { register, handleSubmit } = useForm();

  const onSubmitFunction = (data) => {
    setModal(false);
    api.patch('/cars/' + carId,data)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
  }


  return (
    <>
      {modal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
            <div className="relative w-auto my-6 mx-auto max-w-3xl ">
              <div className="border-0 rounded-lg shadow-lg relative p-4 flex flex-col w-full bg-gray-twelve ">
                <div className="flex flex-col p-5 gap-y-2">
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setModal(false)}
                  >
                    <div className="flex justify-end">
                    <h2 className="text-gray-two opacity-7 h-6 w-6 text-xl bg-gray-400 py-0 rounded-full">
                      x
                    </h2>
                    </div>
                  </button>
                  <h2 className='text-center mt-4 font-semibold text-2xl text-gray-three'>
                    Editar Carro
                  </h2>
                  <form className='flex flex-col gap-y-2 text-gray-two'
                    onSubmit={handleSubmit(onSubmitFunction)}
                  >
                      <label className='font-medium text-gray-three'>Nome</label>
                      <input {...register('name')} type='text' placeholder='Prisma' className='bg-gray-eleven p-2 outline-none border rounded focus:border-primary-dark mb-2'

                      />
                    <label className='font-medium text-gray-three'>Ano Fabricação</label>
                    <input type='text' placeholder='2018' {...register('ano_fabri')}  className='bg-gray-eleven p-2 outline-none border rounded focus:border-primary-dark mb-2'/>
                    <label className='font-medium text-gray-three'>Marca</label>
                    <input type='text' {...register('marca')}  placeholder='Chevrolet' className='bg-gray-eleven p-2 outline-none border rounded focus:border-primary-dark mb-2'/>
                    <label className='text-gray-three font-medium'>Descrição</label>
                    <textarea {...register('descricao')}  className='resize-none border focus:border-primary-dark outline-none rounded p-2 h-20'></textarea>
                    <div className='mt-4 justify-center items-center flex'>
                      <button type='submit'>
                      <Button text={'Editar carro'} />
                      </button>

                    </div>
                    

                  </form>
                         
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  )
}

export default ModalEditCarItem
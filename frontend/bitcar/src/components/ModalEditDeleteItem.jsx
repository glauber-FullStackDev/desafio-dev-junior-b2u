import { useContext } from "react"
import {ModalContext} from '../contexts/ModalContext'
import ModalEditCarItem from "./ModalEditCarItem";
import {ItemContext} from '../contexts/ItemContext'
import api from "../services/api";



const ModalEditDeleteItem = ({modal,setModal}) => {
  const {modalEditCar,setModalEditCar} = useContext(ModalContext);
  const {carId} = useContext(ItemContext)
  const deleteCar = () => {
    setModal(false)
    api.delete('/cars/' + carId)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
  }



  return (
    <>
      {modal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-twelve outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5">
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setModal(false)}
                  >
                    <div className="flex justify-end w-52">
                    <h2 className="text-gray-two opacity-7 h-6 w-6 text-xl bg-gray-400 py-0 rounded-full">
                      x
                    </h2>

                    </div>
                    
                  </button>
                </div>
               
                <div className="flex items-center justify-end p-6 ">
                  <button
                    className="text-[#A60606] bg-[#FF3535] font-bold px-6 py-2 text-sm mr-1 mb-1"
                    type="button"
                    onClick={() => deleteCar()}
                  >
                    Deletar
  
                  </button>
                  <button
                    className="text-[#859000] bg-[#FFEC42] font-bold px-6 py-2 text-sm mr-1 mb-1"
                    type="button"
                    onClick={() =>{ setModal(false);setModalEditCar(true)}}
                  >
                    Editar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
      <ModalEditCarItem modal={modalEditCar} setModal={setModalEditCar}/>
    </>
  )
}

export default ModalEditDeleteItem
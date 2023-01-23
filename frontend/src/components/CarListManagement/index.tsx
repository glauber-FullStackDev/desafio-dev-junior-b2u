import styles from './styles.module.scss'
import { Car } from "../CarList"
import { 
  Dialog, 
  DialogActions,
  DialogContent, 
  DialogContentText, 
  DialogTitle, 
  Button
} from '@material-ui/core';
import { useEffect, useState } from 'react';
import { api } from '../../../services/api';
import { toast } from 'react-toastify';
import Router from 'next/router';

export type CarListManagementProps = {
  cars: Array<Car>
}

export default function CarListManagement ({cars}: CarListManagementProps) {
  const [open, setOpen] = useState(false);
  const [carsList, setCarsList] = useState(cars);


  async function handleDelete(id: string) {
    try {
      const res = await api.delete(`car/${id}`)

      if(res.status === 204) {
        setCarsList(cars.filter(car => car.id !== id));
        toast.success('Carro deletado com sucesso!')
      } else if (res.status===500){
        toast.error('Erro no servidor!')
      }
    }catch (err) {
      toast.error(`${err}`);
    }
  }

 

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEdit = (id: string) => {
    Router.push(`/CarManagement/CarEdit/${id}`);;
  }

  return (
    <div className={styles.carListManagementContainer}>
      <div className={styles.managementCars}>
        <h2 className={styles.managementTitle}> Gerenciar carros</h2>
      </div>
      {carsList?.map(car => (
      <div key={car.id} className={styles.actionsCarList}>
        <div className={styles.carToggle}>
          <div className={styles.carData}>
            <div>
              {car.name}  
            </div>

            <div>
              {car.brand}  
            </div>

            <div>
              {car.manufactureYear}  
            </div>
          </div>

          <div className={styles.actionsButton}>
            <button onClick={() => handleEdit(car.id)}>Editar</button>
            <button onClick={handleClickOpen}>Delete</button>
          </div>
        </div>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Deletar carro</DialogTitle>
          <DialogContent>
              <DialogContentText>
                  Tem certeza que quer deletar?
              </DialogContentText>
          </DialogContent>
          <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={() => {
                  handleDelete(car.id);
                  handleClose();
              }} color="secondary">
                  Deletar
              </Button>
          </DialogActions>
        </Dialog>
      </div>
      ))}

    </div>
  )
}
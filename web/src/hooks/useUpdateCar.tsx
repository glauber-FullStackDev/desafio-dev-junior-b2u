import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../config/apiConfig';
import { Auth } from '../helpers/interfaces/localStorage';
import {getItemFromLocalStorage} from '../services/localStorage'


interface Car {
  id: string
  name: string
  brand: string
  imageUrl?: string
  fabricationDate: string
  description: string
  imageFile: File
}

interface Error {
  message: string
  status: number
}

interface Response {
  error: Error;
  loading: boolean;
  setCar: any
  setError: any
  success: boolean
}

export default function useUpdateCar(): Response {
  const [car, setCar] = useState<Car>({} as Car);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<Error>({} as Error);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const authOnLocalStorage = getItemFromLocalStorage('BitMotors_user_token') as Auth;
  useEffect(() => {
    const authenticateUser = async () => {
      setLoading(true);
      try {
        if (Object.keys(car).length > 0) {          
          const data = { 
            name: car.name,
            brand: car.brand,
            imageUrl: car.imageUrl,
            fabricationDate: car.fabricationDate,
            description: car.description,
            ownerId: authOnLocalStorage.id
          }
          
          const formData = new FormData();
          formData.append("imageFile", car.imageFile);
          formData.append("data", JSON.stringify(data));

          const response = await api.patch(`car/update/${car.id}`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            }
          });

          if (response.status === 200) {
            setSuccess(true)
            navigate('/sell');
          }

        }
      } catch (err: any) {
        if(err.cause === 400) {
          setError({
            status: err.response.status,
            message: err.response.message,
          })

          console.log(err)
        }else{
          setError({
            status: err.response.status,
            message: err.response.message,
          });
        }
      }finally{
        setLoading(false);
      }

    };
    authenticateUser();
  }, [car]);
  return {
    error, setError, loading, setCar, success
  };
}

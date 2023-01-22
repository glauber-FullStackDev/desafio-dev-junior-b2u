import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../config/apiConfig';
import { Auth } from '../helpers/interfaces/localStorage';
import {getItemFromLocalStorage} from '../services/localStorage'


interface Car {
  name: string
  brand: string
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

export default function useInludeCar(): Response {
  const [car, setCar] = useState<Car>({} as Car);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<Error>({} as Error);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const authOnLocalStorage = getItemFromLocalStorage('BitMotors_user_token') as Auth;
  const byte = 1000
  useEffect(() => {
    const authenticateUser = async () => {
      setLoading(true);
      try {
        if (Object.keys(car).length > 0) {          
          const data = { 
            name: car.name,
            brand: car.brand,
            fabricationDate: car.fabricationDate,
            description: car.description,
            ownerId: authOnLocalStorage.id || ''
          }
          if(car.imageFile.size > (byte * 1000)) throw new Error("Arguivo muito grande!", {cause: 409});
          
          
          const formData = new FormData();
          formData.append("imageFile", car.imageFile);
          formData.append("data", JSON.stringify(data));

          const response = await api.post("car/create", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            }
          });

          if (response.status === 201) {
            setSuccess(true)
            navigate('/sell');
          }

        }
      } catch (err: any) {
        if(err.cause === 409) {
          setError({
            status: err.response.status,
            message: err.response.message,
          });
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

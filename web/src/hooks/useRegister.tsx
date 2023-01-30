import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../config/apiConfig';
import { Auth, AuthContext } from '../providers/authProvider';
import { saveOnLocalStorage } from '../services/localStorage';

interface User {
  name: string
  email: string
  phoneNumber: string
  password: string
  imageFile: File
}

interface Error {
  message: string
  status: number
}

interface Response {
  auth: Auth;
  error: Error;
  loading: boolean;
  setUser: any
  setError: any
  success: boolean
}

export default function useRegister(): Response {
  const { auth, setAuth } = useContext(AuthContext);
  const [user, setUser] = useState<User>({} as User);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<Error>({} as Error);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const authenticateUser = async () => {
      setLoading(true);

      try {
        if (Object.keys(user).length > 0) {          
          const data = { 
            name: user.name,
            email: user.email,
            phoneNumber: user.phoneNumber,
            password: user.password,
          }
          
          const formData = new FormData();
          formData.append("imageFile", user.imageFile);
          formData.append("data", JSON.stringify(data));

          const response = await api.post("user/create", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            }
          });

          if (response.status === 201) {
            setSuccess(true)
            setAuth(response.data);
            saveOnLocalStorage('BitMotors_user_token', {...response.data, id: response.data._id});
            navigate('/sell');
          }

        }
      } catch (err: any) {
        setError({
          status: err.response.status,
          message: err.response.message,
        });
      }

      setLoading(false);
    };
    authenticateUser();
  }, [user]);
  return {
    auth, error, setError, loading, setUser, success
  };
}

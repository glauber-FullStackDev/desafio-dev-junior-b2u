import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../config/apiConfig';
import { Auth, AuthContext } from '../providers/authProvider';
import { saveOnLocalStorage } from '../services/localStorage';

interface User {
  email: string
  password: string
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
}

export default function useLogin(): Response {
  const { auth, setAuth } = useContext(AuthContext);
  const [user, setUser] = useState<User>({} as User);
  const [error, setError] = useState<Error>({} as Error);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const authenticateUser = async () => {
      setLoading(true);

      try {
        if (Object.keys(user).length > 0) {
          const response = await api.post('login', {
            email: user.email,
            password: user.password,
          })
          if (response.status === 200) {
            setAuth(response.data);
            saveOnLocalStorage('BitMotors_user_token', response.data);
            navigate('/');
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
    auth, error, setError, loading, setUser,
  };
}

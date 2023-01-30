import React, { ChangeEvent, FormEvent, useState } from 'react';
import {
  TextField, Button, CircularProgress, Alert,
} from '@mui/material';
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';
import {Regexconstants} from '../../helpers/consts/regex'
interface errorMessages {
  email: string
  password: string
}



export default function LoginForm() {
  const [email, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState<errorMessages>({ email: '', password: '' });
  const {
    error, loading, setError, setUser,
  } = useLogin();
  const {emailRegex, passwordRegex} = Regexconstants
  const handleLogin = (e: FormEvent) => {
    e.preventDefault()
    if (emailRegex.test(email) && passwordRegex.test(password)) {
      setUser({ email, password });
    }
  };

  const handleChangeName = (email: string) => {
    setName(email);
    if (email === '') {
      setErrors({ ...errors, email: 'Campo Obrigatório!' });
      return;
    }
    if (!emailRegex.test(email)) {
      setErrors({ ...errors, email: 'Digite um email válido!' });
      return;
    }
    setErrors({ ...errors, email: '' });
  };
  const handleChangePassword = (password: string) => {
    setPassword(password);
    if (password === '') {
      setErrors({ ...errors, password: 'Campo Obrigatório!' });
      return;
    }
    if (!passwordRegex.test(password)) {
      setErrors({ ...errors, password: 'Senha deve conter ao menos 8 caracteres, incluindo letras, números e caracteres especiais' });
    } else {
      setErrors({ ...errors, password: '' });
    }
  };

  
  

  return (
    <form
      className="
        w-full h-[300px] max-w-[400px]
        flex flex-col justify-center gap-4"
      onSubmit={handleLogin}
    >
      <TextField
        label="Email"
        name="email"
        disabled={loading}
        placeholder="Digite seu email"
        value={email}
        error={errors.email !== ''}
        helperText={errors.email}
        onKeyDown={() => setError(undefined)}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeName(e.target.value)}
      />
      <TextField
        label="Senha"
        value={password}
        disabled={loading}
        type="password"
        error={errors.password !== ''}
        helperText={errors.password}
        placeholder="***********"
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangePassword(e.target.value)}
        onKeyDown={() => setError(undefined)}
        name="password"
      />

      <Button
        disabled={loading}
        variant="contained"
        color="primary"
        type="submit"
        endIcon={loading ? <CircularProgress size={20} variant="indeterminate" color="inherit" /> : undefined}
      >
        Entrar
      </Button>
      <div
        className="flex items-center justify-end"
      >
        <p>
          Não tem uma conta?
          <Link
           to='/register'
           className='text-blue-500 cursor-pointer'
          >
            Clique aqui!
          </Link>
        </p>
        
      </div>

      {
        error?.status === 404
          ? <Alert severity="error">Email ou senha estão incorretos!</Alert>
          : ''
      }

    </form>
  );
}

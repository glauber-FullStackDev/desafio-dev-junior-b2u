/* eslint-disable consistent-return */
/* eslint-disable react/jsx-no-bind */
import {
  Alert,
  Button, CircularProgress, FormControl, TextField, Typography,
} from '@mui/material';
import React, {
  useState,
} from 'react';
import InputFile from '../../components/inputFile'
import masks from '../../helpers/InputMask';
import {Regexconstants} from '../../helpers/consts/regex'
import useRegister from '../../hooks/useRegister';

interface UserInfo {
  name: string
  email: string
  phoneNumber: string
  password: string
  imageFile: File | null
}

interface ErrorMessages {
  email: string
  name: string
  telefone: string
  password: string
  phoneNumber: string
}

export default function Register() {
  const [imagePreview, setImagePreview] = useState<any>()
  const [errors, setErrors] = useState<ErrorMessages>({
    email: '',
    name: '',
    telefone: '',
    password: '',
    phoneNumber: '',
  })
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    imageFile: null
  });

  const {
    error, loading, setError, setUser,success
  } = useRegister();

  const {emailRegex, passwordRegex} = Regexconstants
  function handleImage(e: React.FormEvent<HTMLInputElement>) {
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      const file = new FileReader();
      file.readAsDataURL(e.currentTarget.files[0]);
      file.onload = ({target}) => {
        setImagePreview(target?.result)
      }      
      setUserInfo({...userInfo, imageFile: e.currentTarget.files[0]})
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;  
    
    if (name === 'email' && !emailRegex.test(value)) {
      setErrors({...errors, [name]: 'Insira um email Válido!'})
    }else{
      setErrors({...errors, email: ''})
    }
    if (name === 'password' && !passwordRegex.test(value)) {
      setErrors({...errors, [name]: 'Senha deve conter ao menos 8 caracteres, incluindo letras, números e caracteres especiais'})
    }else{
      setErrors({...errors, password: ''})
    }
    if(!value.length) {
      setErrors({...errors, [name]: 'Campo Obrigatório!'})
    }
    if(name === 'phoneNumber')  return setUserInfo({ ...userInfo, [name]: masks.phoneNumberMask(value) });
    setUserInfo({ ...userInfo, [name]: value });
    
  }

  const handleRegister = () => {
    setUser({...userInfo})    
  }

  return (
    <div
      className="container px-4 max-h-fit flex flex-col gap-20 justify-center items-center  max-h-content"
    >
      <Typography
        variant="h4"
        color="primary"
      >
        Inscreva-se agora e desfrute de nossos benefícios
      </Typography>
      <form
        className="flex flex-col gap-3 items-center w-full max-w-[450px] pb-4"
      >
        {
          error?.status === 409
          ? <Alert severity="error">Email já cadastrado!</Alert>
          : ''
        }

        {
          success
          ? <Alert severity="success">Usuário cadastrado!</Alert>
          : ''
        }
        <FormControl fullWidth>
          <TextField
            label="Nome"
            name="name"
            value={userInfo.name}
            error={errors.name !== ''}
            helperText={errors.name}
            onKeyDown={() => setError(undefined)}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl fullWidth>
          <TextField
            label="Email"
            name="email"
            value={userInfo.email}
            error={errors.email !== ''}
            helperText={errors.email}
            onKeyDown={() => setError(undefined)}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl fullWidth>
          <TextField
            label="Telefone"
            name="phoneNumber"
            value={userInfo.phoneNumber}
            error={errors.phoneNumber !== ''}
            helperText={errors.phoneNumber}
            onKeyDown={() => setError(undefined)}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl fullWidth>
          <TextField
            label="Senha"
            name="password"
            value={userInfo.password}
            error={errors.password !== ''}
            helperText={errors.password}
            onChange={handleChange}
            onKeyDown={() => setError(undefined)}
          />
        </FormControl>

        <FormControl fullWidth>
          <InputFile
            label="Inserir imagem de perfil"
            name='photo'
            onChange={handleImage}
            imagePreview={imagePreview}
        />
        </FormControl>

        <FormControl
          fullWidth
          margin="dense"
        >

          
          <Button
            disabled={loading}
            variant="contained"
            color="primary"
            endIcon={loading ? <CircularProgress size={20} variant="indeterminate" color="inherit" /> : undefined}
            onClick={handleRegister}
          >
            Cadastrar
          </Button>
        </FormControl>
        
      </form>
    </div>
  );
}

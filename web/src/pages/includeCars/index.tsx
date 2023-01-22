/* eslint-disable consistent-return */
/* eslint-disable react/jsx-no-bind */
import {
  Alert,
  Button, CircularProgress, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography,
} from '@mui/material';
import React, {
  ChangeEvent,
  useState,
} from 'react';
import InputFile from '../../components/inputFile'
import masks from '../../helpers/InputMask';
import {Regexconstants} from '../../helpers/consts/regex'
import useIncludeCar from '../../hooks/useIncludeCar';
import { brands } from '../../helpers/consts/brands';

interface CarInfo {
  name: string
  brand: string
  fabricationDate: string
  description: string
  imageFile: File | null
}

interface ErrorMessages {
  name: string
  brand: string
  fabricationDate: string
  description: string
  imageFile: string
}

export default function IncludeCars() {
  const [imagePreview, setImagePreview] = useState<any>()
  const [errors, setErrors] = useState<ErrorMessages>({
    name: '',
    brand: '',
    fabricationDate: '',
    description: '',
    imageFile: ''
  })
  const [carInfo, setCarInfo] = useState<CarInfo>({
    name: '',
    brand: '',
    fabricationDate: '',
    description: '',
    imageFile: null
  });

  const [brand, setBrand] = useState<string>('')

  const {
    error, loading, setError, setCar ,success
  } = useIncludeCar();

  function handleImage(e: React.FormEvent<HTMLInputElement>) {
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      if(e.currentTarget.files[0].size > 1000000) {
        return setErrors({...errors, imageFile: 'Campo Obrigatório!'})
      }
      setErrors({...errors, imageFile: ''}) 
      const file = new FileReader();
      file.readAsDataURL(e.currentTarget.files[0]);
      file.onload = ({target}) => {
        setImagePreview(target?.result)
      }      
      setCarInfo({...carInfo, imageFile: e.currentTarget.files[0]})
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;  
    if(!value.length) {
       setErrors({...errors, [name]: 'Campo Obrigatório!'})
    }
    if(name === 'fabricationDate')  return setCarInfo({ ...carInfo, [name]: masks.dateMask(value) });
     setCarInfo({ ...carInfo, [name]: value });
  }

  const handleRegister = () => {
    setCar({...carInfo, brand})    
  }

  return (
    <div
      className="container px-4 max-h-fit flex flex-col gap-20 justify-center items-center  max-h-content"
    >
      <Typography
        variant="h4"
        color="primary"
      >
        Anuncie seu carro para milhares de compradores!
      </Typography>
      <form
        className="flex flex-col gap-3 items-center w-full max-w-[450px] pb-4"
      >
        {
          error?.status === 500
          ? <Alert severity="error">Erro ao incluir carro. Tente novamente.</Alert>
          : ''
        }
        {
          errors.imageFile !== ''
          ? <Alert severity="error">Tamanhao máximo permitido da imagem é de <strong>1mb</strong></Alert>
          : ''
        }

        {
          success
          ? <Alert severity="success">Veículo adicionado!</Alert>
          : ''
        }
        
        
        <FormControl fullWidth>
          <InputLabel id="state">Marca</InputLabel>
          <Select
            labelId="state"
            id="state-id"
            value={brand}
            name="brand"
            label="Estado"
            onChange={(e: SelectChangeEvent<string>) => setBrand(e.target.value)}
            defaultValue="Chevrolet"
            color="primary"
            variant="outlined"
          >
            {
              brands.map((brand, i) => <MenuItem key={new Date().getTime() * i} value={brand}>{brand}</MenuItem>)
            }
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <TextField
            label="Modelo"
            name="name"
            value={carInfo.name}
            error={errors.name !== ''}
            helperText={errors.name}
            onKeyDown={() => setError(undefined)}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl fullWidth>
          <TextField
            label="Data de Fabricação"
            name="fabricationDate"
            value={carInfo.fabricationDate}
            error={errors.fabricationDate !== ''}
            helperText={errors.fabricationDate}
            onKeyDown={() => setError(undefined)}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl fullWidth>
          <TextField
            label="Descrição"
            name="description"
            value={carInfo.description}
            error={errors.description !== ''}
            helperText={errors.description}
            onChange={handleChange}
            onKeyDown={() => setError(undefined)}
          />
        </FormControl>

        <FormControl fullWidth>
          <InputFile
            label="Insira a Imagem do Carro"
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

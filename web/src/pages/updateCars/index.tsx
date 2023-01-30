import {
  Alert,
  Button, CircularProgress, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Snackbar, TextField, Typography,
} from '@mui/material';
import React, {
  useEffect,
  useState,
} from 'react';
import InputFile from '../../components/inputFile'
import masks from '../../helpers/InputMask';
import { brands } from '../../helpers/consts/brands';
import api from '../../config/apiConfig';
import { useParams } from 'react-router-dom';
import useUpdateCar from '../../hooks/useUpdateCar';

interface CarInfo {
  id: string
  name: string
  brand: string
  fabricationDate: string
  description: string
  imageFile: File | null
  imageUrl: string
}

interface ErrorMessages {
  name: string
  brand: string
  fabricationDate: string
  description: string
  imageFile: string
}

export default function UpdateCars() {
  const {id} = useParams()
  
  const [imagePreview, setImagePreview] = useState<any>()
  const [errors, setErrors] = useState<ErrorMessages>({
    name: '',
    brand: '',
    fabricationDate: '',
    description: '',
    imageFile: ''
  })
  const [carInfo, setCarInfo] = useState<CarInfo>({
    id: '',
    name: '',
    brand: '',
    fabricationDate: '',
    description: '',
    imageFile: null,
    imageUrl: ''
  });
  const [brand, setBrand] = useState<string>('')

  useEffect(()=> {
    api.get(`car/find/${id}`).then(({data: {car}}) => {
      console.log(car)
      setCarInfo({
        id: car.id,
        name: car.name,
        brand: '',
        fabricationDate: car.fabricationDate,
        imageUrl: car.imageUrl,
        description: car.description,
        imageFile: null
      })
      setBrand(car.brand)
      setImagePreview(car.imageUrl)
    })
  }, [])


  const {
    error, loading, setError, setCar ,success
  } = useUpdateCar();

  function handleImage(e: React.FormEvent<HTMLInputElement>) {
    const oneMegaByte = 1000000
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      if(e.currentTarget.files[0].size > oneMegaByte) {
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
        variant="h3"
        color="primary"
      >
        Deseja fazer alguma alteração?
      </Typography>
      <form
        className="flex flex-col gap-3 items-center w-full max-w-[450px] pb-4"
      >
        {
          error?.status === 409
          ? <Alert severity="error">Nada foi modificado!</Alert>
          : ''
        }
        {
          errors.imageFile !== ''
          ? <Alert severity="error">Tamanhao máximo permitido da imagem é de <strong>1mb</strong></Alert>
          : ''
        }
        
        <Snackbar open={success} autoHideDuration={3000}>
          <Alert  severity="success" sx={{ width: '100%' }}>
            Veículo Atualizado!
          </Alert>
        </Snackbar>
        
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
            Enviar
          </Button>
        </FormControl>
        
      </form>
    </div>
  );
}

import * as S from './Styled'
import { VehicleContext } from '../../context/vehicleContext'
import { useNavigate } from 'react-router-dom'
import { goToHome } from '../../router/coordinator'
import useForm from '../../hook/useForm'
import useVehicle from '../../hook/useVehicle'
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import { useContext } from 'react'


const CreateVehicle = () => {
  const { vehiclesDetails, errorMessage } = useContext(VehicleContext)
  const navigate = useNavigate()
  const { createVehicle, updateVehicle } = useVehicle()

  const input = {
    carName: '',
    brand: '',
    yearOfManufacture: '',
    description: '',
    name: '',
    telephone: '',
    email: ''
  }
  const { form, clean, onChange } =
    useForm(!vehiclesDetails ? input : vehiclesDetails)

  const submit = (event) => {
    event.preventDefault()
    if (!vehiclesDetails) {
      createVehicle(form, clean)
    } else {
      updateVehicle(form, clean)
    }
  }

  return (
    <S.Container>
    
      <Header button={() => goToHome(navigate)} />
      <S.Form onSubmit={submit}>
        <h2>{!vehiclesDetails ? "Criar novo veiculo" : "Alterar Dados"}</h2>
        <S.Hr />
        {!errorMessage ? '' : <S.Err>{errorMessage}</S.Err>}
        <S.Label htmlFor="carName">
          Modelo
          <S.Input
            type="text"
            minLength={3}
            maxLength={30}
            placeholder=' Modelo do carro'
            id="carName"
            name={"carName"}
            onChange={onChange}
            value={form.carName}
            required
          />
        </S.Label>

        <S.Label htmlFor="brand...">
          Marca
          <S.Input
            type="text"
            minLength={3}
            maxLength={30}
            placeholder=' Marca do carro...'
            id="brand"
            name={"brand"}
            onChange={onChange}
            value={form.brand}
            required
          />
        </S.Label>

        <S.Label htmlFor="yearOfManufacture">
          Ano
          <S.Input
            type="text"
            placeholder=' Ano do carro ex: 2022...'
            pattern={"[1-2][0-9][0-9][0-9]"}
            id="yearOfManufacture"
            minLength={4}
            maxLength={4}
            name={"yearOfManufacture"}
            onChange={onChange}
            value={form.yearOfManufacture}
            required
          />
        </S.Label>

        <S.Label htmlFor="description">
          Descrição
          <S.Description
            placeholder=' Descrição do carro...'
            name="description"
            id="description"
            minLength={10}
            maxLength={250}
            onChange={onChange}
            value={form.description}
            required
          />
        </S.Label>

        <S.Label htmlFor="name">
          Name
          <S.Input
            placeholder=' Nome do proprietario...'
            type="text"
            id="name"
            minLength={3}
            maxLength={30}
            name={"name"}
            onChange={onChange}
            value={form.name}
            required
          />
        </S.Label>

        <S.Label htmlFor="Telefone">
          Telefone
          <S.Input
            type='tel'
            placeholder=' 55 000000000...'
            id="telephone"
            name={"telephone"}
            pattern={'[0-9]{2}\ \[0-9]{4,5}[0-9]{4}'}
            minLength={11}
            maxLength={14}
            onChange={onChange}
            value={form.telephone}
            required
          />
        </S.Label>

        <S.Label htmlFor="email">
          Email
          <S.Input
            placeholder=' digite@email.com...'
            id="email"
            type="email"
            name={"email"}
            onChange={onChange}
            value={form.email}
            required
          />
        </S.Label>

        <S.NeVehicle>
          {!vehiclesDetails ? "Adicionar Veiculo" : "Alterar"}
        </S.NeVehicle>
      </S.Form>
      <Footer />
    </S.Container>
  )
}

export default CreateVehicle
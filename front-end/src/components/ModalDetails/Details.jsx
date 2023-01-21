import * as S from './Styled'

const Details = (props) => {
  const { vehicleDetails, modal, deleteVehicle, update, close } = props
  return (
    <>
      {!modal ? null :
        <S.Container>
          <S.Content>
            <S.Close onClick={close}>X</S.Close>
            <h1>Dados do Veiculo</h1>
            <S.Hr />
            <S.VehicleData>
              <p>Marca: {vehicleDetails.brand}</p>
              <p>Modelo: {vehicleDetails.carName}</p>
              <p>Ano: {vehicleDetails.yearOfManufacture}</p>
              <p>Descrição: {vehicleDetails.description}</p>
            </S.VehicleData>

            <h1>Dados do Proprietario</h1>
            <S.Hr />
            <S.VehicleData>
              <p>Nome: {vehicleDetails.name}</p>
              <p>Telefone: {vehicleDetails.telephone}</p>
              <p>Email: {vehicleDetails.email}</p>
            </S.VehicleData>
            <S.ContButton>
              <S.Update onClick={update}>Alterar</S.Update>
              <S.Delete onClick={deleteVehicle}>Deletar</S.Delete>
            </S.ContButton>
          </S.Content>
        </S.Container>
      }
    </>
  )
}

export default Details
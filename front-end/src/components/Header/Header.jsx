import * as S from "./styled"
import {AiFillCar} from 'react-icons/ai'
import {TbArrowBackUp} from 'react-icons/tb'
import { useLocation } from "react-router-dom"

const Header = (props) => {
  const location = useLocation()
  return (
    <S.Container>
      <S.Logo>
        <S.TitleLogo>Revenda</S.TitleLogo>
        <p>de veiculos</p>
      </S.Logo>

      {location.pathname === "/" ?
      <S.AddVehicle onClick={props.button}>Adicionar Veiculo <AiFillCar size={15}
      />
      </S.AddVehicle>:
      <S.AddVehicle onClick={props.button}>Voltar<TbArrowBackUp size={15}
      />
      </S.AddVehicle>
      }
    </S.Container>
  )
}

export default Header
import * as S from "./styled"
import {AiFillCar} from 'react-icons/ai'
import {TbArrowBackUp} from 'react-icons/tb'
import { useLocation, useNavigate } from "react-router-dom"
import {goToHome} from '../../router/coordinator'

const Header = (props) => {
  const location = useLocation()
  const navigate = useNavigate()
  return (
    <S.Container>
      <S.Logo  onClick={()=>goToHome(navigate)}>
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
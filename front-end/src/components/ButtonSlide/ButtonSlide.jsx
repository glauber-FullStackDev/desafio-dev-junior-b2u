import { MdKeyboardArrowRight } from "react-icons/md"
import * as S from "./Styled"

const ButtonSlide = (props) => {
  return (
    <S.Container>
            <S.Next onClick={props.button}><MdKeyboardArrowRight size={"30px"} /></S.Next>
            <S.Cont>
                <p>{props.page}</p>
                <p>de</p>
                <p>{props.totalPage}</p>
            </S.Cont>
            <S.Next onClick={props.button}><MdKeyboardArrowRight size={"30px"} /></S.Next>
        </S.Container>
  )
}

export default ButtonSlide
import { MdKeyboardArrowRight } from "react-icons/md"
import * as S from "./Styled"

const ButtonSlide = (props) => {
  const {page,totalPage,button} = props
  return (
    <S.Container>
            <S.Next onClick={button}><MdKeyboardArrowRight size={"30px"} /></S.Next>
            <S.Cont>
                <p>{String(page)}</p>
                <p>de</p>
                <p>{String(totalPage)}</p>
            </S.Cont>
            <S.Next onClick={button}><MdKeyboardArrowRight size={"30px"} /></S.Next>
        </S.Container>
  )
}

export default ButtonSlide
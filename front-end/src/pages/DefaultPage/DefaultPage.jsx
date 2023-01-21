import Logo from "../../assets/loader.png"
import { Container, Logo as ImgLogo } from './styled'

const DefaultPage = () => {
  
    return (
    <Container>
        <ImgLogo src={Logo} alt="Rappi4"/>
    </Container>
    )
}
export default DefaultPage
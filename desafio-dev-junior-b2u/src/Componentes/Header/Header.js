import './styles.css'
import logoCarro from '../../assets/carro.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Header(){
const navigate = useNavigate('')
    return(
        <div className='header-area'> 
        <header className='header'>
          <img src={logoCarro} alt="carro"/>
                <div class="spans">
                <Link to="/consulta">Consultar</Link>
                <Link to="/cadastrarCarro">Adicionar</Link>
                </div>
              <button className="btn-button"><Link className="btn-link"to="/">Login</Link></button>    
        </header>
        </div>
    )
}

export default Header
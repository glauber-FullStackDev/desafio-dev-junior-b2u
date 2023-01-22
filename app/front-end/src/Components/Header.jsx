import { Link, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import imgPerfil from '../Images/perfil.png';
import Context from '../Context/CarShopContext';
import '../Styles/Header.css';


const Header = () => {
  const token = localStorage.getItem('token');
  const { pathname } = useLocation();
  const { handleClickLogin } = useContext(Context);

  return (
    <header>
      <Link to="/"><h1>CARSHOP</h1></Link>
      <nav>
        <ul>
          <li><Link to="/" className={ pathname === '/' ? 'selected' : '' }>buy car</Link></li>
          <li><Link to={ token ? '/sell' : '/login' } className={ pathname === '/sell' ? 'selected' : '' }>sell car</Link></li>
          <li><Link to={ token ? '/mycars' : '/login' } className={ pathname === '/mycars' ? 'selected' : '' }>my cars</Link></li>
        </ul>
      </nav>
      <button onClick={ handleClickLogin } className="login-btn">{ token ? 'Logout' : 'Login' }<img width="22" src={ imgPerfil } alt="" /></button>
    </header>
  )
}

export default Header;
import { Link } from 'react-router-dom';
import logo from '../../assets/logo_nav_bar.png';
import styles from './NavBar.module.css';
import { BiLogOut } from 'react-icons/bi';

function Navbar() {
        
    // Faz logout do usuário removendo os dados do localStorage e redireciona para tela de login
    const handleLogout = () => {
        localStorage.removeItem('login');
        localStorage.removeItem('password');
    
        window.location.replace('/');
      };

    return (
        <div className={styles.nav}>
                <Link to='/inicio'>
                    <img className={styles.car} src={logo} alt="logo Sharenergy"/>
                </Link>
                <ul className={styles.list}>

                    <li className={styles.item}>
                        <Link to='/inicio'>Inicio</Link>
                    </li>
        
                    <li className={styles.item}>
                        <Link to='/cadastro'>Cadastro</Link>
                    </li>

                    <li className={styles.item}>
                        <Link to='/catalogo'>Catalogo</Link>
                    </li>

                    <li className={styles.item}>
                        <Link to='/sobre'>Sobre</Link>
                    </li>

                    <li>
                        <button onClick={handleLogout} className={styles.logout}>
                            <BiLogOut/>
                        </button>
                    </li>
                </ul>

                

        </div>
    )
}

export default Navbar
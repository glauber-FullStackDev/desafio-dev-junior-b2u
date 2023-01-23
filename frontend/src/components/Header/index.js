import './styles.css';
import LogoImage from '../../assets/logo.png';

function Header() {
  return (
    <header className="header">
        <img src={LogoImage} alt='Logo' />
    </header>
  );
}

export default Header;
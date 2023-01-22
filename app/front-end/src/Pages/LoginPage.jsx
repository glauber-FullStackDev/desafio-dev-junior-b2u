import { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import '../Styles/Login.css';
import { login, register, getUserCars, getCars } from '../Services/Api';
import { useContext } from 'react';
import Context from '../Context/CarShopContext';

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { pathname } = useLocation();
  const { setUserCars, setCars } = useContext(Context);

  const handleClick = async () => {
    const userInfo = {
      email,
      password,
    };

    try {
      await login(userInfo);
      const cars = await getCars();
      setCars(cars);
      const userCars = await getUserCars();
      setUserCars(userCars);
      navigate('/');
    } catch(error) {
      setError(error.response.data.message);
    }
  }

  const handleClickRegister = async () => {
    const userInfo = {
      username,
      email,
      phoneNumber,
      password,
    };
    try {
      await register(userInfo);
      setError('');
      setUserName('');
      setEmail('');
      setPhoneNumber('');
      setPassword('');
      navigate('/login');
    } catch(error) {
      setError(error.response.data.message);
    };
  }

  const handleClickRegisterLogin = () => {
    setError('');
    setUserName('');
    setEmail('');
    setPhoneNumber('');
    setPassword('');
  }

  return (
    <div className="login">
      <div className="title">
        <h1>CARSHOP</h1>
        <h2>Follow your route forward, on 4 wheels</h2>
      </div>
      <div className="form-login">
        <h2>
          {
            pathname === '/login' ? 'Hello, welcome back!' : 'Hello, welcome!'
          }
        </h2>
        <label htmlFor="user" hidden={ pathname === '/login' ? true : false }>
          <input type="text" value={ username } id="user" placeholder="User" onChange={ ({ target }) => setUserName(target.value) } />
        </label>
        <label htmlFor="email">
          <input type="email" value={ email } id="email" placeholder="Email" onChange={ ({ target }) => setEmail(target.value) } />
        </label>
        <label htmlFor="phoneNumber" hidden={ pathname === '/login' ? true : false }>
          <input type="number" value={ phoneNumber } id="phoneNumber" placeholder="Phone number" onChange={ ({ target }) => setPhoneNumber(target.value) } />
        </label>
        <label className="input-password" htmlFor="password">
          <input type="password" value={ password } id="password" placeholder="Password" onChange={ ({ target }) => setPassword(target.value) } />
          <span hidden={ password ? true : false } className="min-pass">( Minimum 8 characters )</span>
        </label>
        {
          pathname === '/login'
            ? <button onClick={ handleClick }>Login</button>
            : <button onClick={ handleClickRegister }>Register</button>
        }
        {
          pathname === '/login'
          ? <p>Don't have an account ? <Link onClick={  handleClickRegisterLogin } to="/register" className="register-login">Register</Link></p>
          : <p>Already have an account ? <Link onClick={ handleClickRegisterLogin } to="/login" className="register-login">Login</Link></p>
        }
        <span className="error">{ error }</span>
      </div>
    </div>
  )
}

export default LoginPage;
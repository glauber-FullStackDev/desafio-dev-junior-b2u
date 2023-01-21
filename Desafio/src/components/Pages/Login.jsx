import React, { useState } from 'react';
import { useEffect } from 'react';
import styles from './Login.module.css';
import logo from '../../assets/logo.png'

function Login() {
  // Estados para armazenar o valor dos inputs de login, senha e de lembrar a senha
  const [formData, setFormData] = useState({
    login: '',
    password: '',
    rememberMe: false,
  });

  // Função para atualizar o estado quando os valores dos inputs mudarem
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  /*
    Função que é chama ao enviar o formulario
    1. Salva dados no localStorage se desejar lembrar senha
    2. Autenticação de dados de login
    3. Redireciona o usuario para tela inicial após o login
  */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.rememberMe) {
      localStorage.setItem('login', formData.login);
      localStorage.setItem('password', formData.password);
    }

    if(formData.login === 'bitcoin' && formData.password === 'bitcoin') {
        window.location.replace('/inicio')

    } else {
      alert('Login ou senha inválidos.')
    }
  };

  // Verifica se existe dados de login armazenados e se tiver dados ele loga automaticamente
  useEffect(() => {
    const login = localStorage.getItem('login');
    const password = localStorage.getItem('password');
    if (login && password) {
      setFormData({
        login,
        password,
        rememberMe: true,
      });
    }
  }, []);

  // HTML
  return (
    <section className={styles.sec1}>
      <div className={styles.container}>
        <div className={styles.apresentation}>
          <div className={styles.content}>
            <img src={logo} alt="logo sharenergy"></img>
            <h1>Bem-vindo a FARAR!</h1>
            <p>
                Navegue pelo nosso catálogo on-line para encontrar o <span>carro dos seus sonhos</span> hoje.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <h1>Entre</h1>

          <form onSubmit={handleSubmit}>
            <label className={styles.labelCard}>
              Login:
            </label>
              <input type="text" placeholder='Insira seu login' name="login" value={formData.login} onChange={handleInputChange} />
            <br />

            <label className={styles.labelCard}>
                Senha:
            </label>
              <input type="password" placeholder='Insira sua senha' name="password" value={formData.password} onChange={handleInputChange} />
            <br />

              <button type="submit">Entrar</button>
            <br />

            <label className={styles.rememberMe}>
                Lembrar senha
                <input type="checkbox" name="rememberMe" value={formData.rememberMe} onChange={handleInputChange} />
            </label>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login;
import React from 'react'
import { Link } from 'react-router-dom'

const ForgotPage = () => {

  function handleSubmit(e: React.SyntheticEvent){
    e.preventDefault();
    window.location.replace("forgot-response");
  }

  return (
    <div id="login-page" className="page">
    <section className="forgot-page">
      <h1>Recupere sua senha</h1>
      <p>Insira o seu e-mail cadastrado no sistema</p>
      <form action="login" method="get" className="">
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            E-mail
          </label>
          <input type="text" name="email" id="" className="form-input" />
        </div>
        <div className="buttons">
          <button type="submit" onClick={handleSubmit} className="button-primary">
            Recuperar
          </button>
          <button type="submit" className="button-secondary">
            Limpar
          </button>
        </div>
      </form>
      <p><Link to={'/login'} >Voltar para o login</Link></p>
    </section>
  </div>
  )
}

export default ForgotPage

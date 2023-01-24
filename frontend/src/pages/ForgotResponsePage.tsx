import React from 'react'
import { Link } from 'react-router-dom'

const ForgotPage = () => {

  return (
    <div id="login-page" className="page">
    <section className="forgot-page">
      <h1>Recuperação de senha</h1>
      <p>Um e-mail foi enviado para o endereço fornecido. Para alterar a senha basta clicar no link da mensagem.</p>
      <p><Link to={'/login'} >Voltar para o login</Link></p>
    </section>
  </div>
  )
}

export default ForgotPage

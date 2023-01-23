
import './index.scss'

import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Index(props) {

  function verificarMenuSelecionado(menu) {
    if(menu === props.selecionado) {
      return 'selecionado';
    } else {
      return '';
    }
  }

  return (
    <nav className="comp-menu">
      <div>
        <div className='logo'>
          <img src="/assets/images/logo.svg" alt="logo" />
          <div>BitCar</div>
        </div>

        <div className='menu-items'>
          <Link to='/' className={verificarMenuSelecionado('home')}>
            <img src="/assets/images/icon-home.svg" alt="home" />
            <div>Home</div>
          </Link>
          <Link to='/cadastrar' className={verificarMenuSelecionado('cadastrar')}>
            <img src="/assets/images/icon-cadastrar.svg" alt="cadastrar" />
            <div>Cadastrar</div>
          </Link>
          <Link to='/consultar' className={verificarMenuSelecionado('consultar')}>
            <img src="/assets/images/icon-consultar.svg" alt="consultar" />
            <div>Consultar</div>
          </Link>
        </div>
      </div>
    </nav>
  )
}
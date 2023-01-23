import React from 'react';
import img from '../../assets/imgs/carros_usados.jpg';
import Main from '../templates/Main';

export default function Home(props) {
  return (
    <Main icon='home' title='Início' subtitle='Temos as melhores ofertas pra você sair de carro novo!!'>
      <div className='display-4'>Bem vindo!!!</div>
      <hr />
      <img className='img' src={img} alt='img' />
    </Main>
  );
}

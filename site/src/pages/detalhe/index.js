import Menu from '../../components/menu'
import Cabecalho from '../../components/cabecalho'
import Detalhe from '../../components/detalhe'

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { buscarPorId } from '../../api/userApi';

import './index.scss'


export default function Index() {
  const [conteudo, setConteudo] = useState({});

  let idParam = Number(useParams().idParam);

  useEffect(() => {
    carregarVeiculo();
  });


  async function carregarVeiculo() {
    const resposta = await buscarPorId(idParam);
    setConteudo(resposta);
  }

  return (
    <main className='page page-detalhe'>
      <Menu />
      <div className='container'>
        <Cabecalho />

        <div className='conteudo'>
          <Detalhe conteudo={conteudo} />
        </div>
      </div>
    </main>
  )
}


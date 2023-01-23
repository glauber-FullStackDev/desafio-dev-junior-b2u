import Menu from '../../components/menu'
import Cabecalho from '../../components/cabecalho'

import { cadastrarVeiculo, alterarVeiculo, buscarPorId } from '../../api/userApi'

import './index.scss'
import { useEffect, useState } from 'react'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';


export default function Index() {
  const [nomeVeiculo, setNomeVeiculo] = useState('');
  const [marca, setMarca] = useState('');
  const [anoFabricacao, setAnoFabricacao] = useState('');
  const [descricao, setDescricao] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  let [id, setId] = useState(0);
  let idParam = Number(useParams().idParam);


  useEffect(() => {
    if (idParam) {
      async function carregarVeiculo() {
        const resposta = await buscarPorId(idParam);
        setId(resposta.id);
        setNomeVeiculo(resposta.nomeVeiculo);
        setMarca(resposta.marca);
        setAnoFabricacao(resposta.anoFabricacao.substr(0, 10));
        setDescricao(resposta.descricao);
        setNome(resposta.donoNome);
        setEmail(resposta.donoEmail);
        setTelefone(resposta.donoTelefone);
      }
      carregarVeiculo();
    }
  }, [idParam]);


  async function salvarClick() {
    try {
      if (id === 0) {
        const veiculoNovo = await cadastrarVeiculo(nomeVeiculo, marca, anoFabricacao, descricao, nome, email, telefone);
        setId(veiculoNovo.id);
        toast.dark('Veiculo cadastrado com sucesso!');
      }
      else {
        if (!id) {
          id = idParam;
        }
        await alterarVeiculo(id, nomeVeiculo, marca, anoFabricacao, descricao, nome, email, telefone);
        toast.dark('Veiculo alterado com sucesso!');
      }
    } catch (error) {
      toast.error(error.response.data.erro);
    }
  }

  function novoClick() {
    setId(0);
    setNomeVeiculo('');
    setMarca('');
    setAnoFabricacao('');
    setDescricao('');
    setNome('');
    setEmail('');
    setTelefone('');
  }



  return (
    <main className='page page-cadastrar'>
      <Menu selecionado='cadastrar' />
      <div className='container'>
        <Cabecalho />

        <div className='conteudo'>
          <section>
            <h1 className='titulo'><span>&nbsp;</span>
              {id === 0 ? ' Cadastrar Novo Veiculo' : ' Alterar Veiculo'}
            </h1>

            <div className='form-colums'>
              <div>
                <div className='form-row'>
                  <label>Nome Veiculo:</label>
                  <input type='text' placeholder='Nome do veículo' value={nomeVeiculo} onChange={e => setNomeVeiculo(e.target.value)} />
                </div>
                <div className='form-row'>
                  <label>Marca:</label>
                  <input type='text' placeholder='Modelo do veículo' value={marca} onChange={e => setMarca(e.target.value)} />
                </div>
                <div className='form-row'>
                  <label>Ano fabricação:</label>
                  <input type='date' value={anoFabricacao} onChange={e => setAnoFabricacao(e.target.value)} />
                </div>
                <div className='form-row'>
                  <label>Descrição:</label>
                  <input type='text' placeholder='Descrição do veículo' value={descricao} onChange={e => setDescricao(e.target.value)} />
                </div>
                <br />
              </div>
              <div>
                <div className='form-row'>
                  <label>Nome dono:</label>
                  <input type='text' placeholder='Nome dono' value={nome} onChange={e => setNome(e.target.value)} />
                </div>
                <div className='form-row'>
                  <label>E-mail:</label>
                  <input type='text' placeholder='E-mail' value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className='form-row'>
                  <label>Telefone:</label>
                  <input type='text' placeholder='(00) 000000000' value={telefone} onChange={e => setTelefone(e.target.value)} />
                </div>
                <br />
                <br />
                <div className='form-row'>
                  <label></label>
                  <div className='btnSalvar'>
                    <button onClick={salvarClick}>{id === 0 ? 'SALVAR' : 'ALTERAR'}</button> &nbsp;
                    <button onClick={novoClick}>NOVO</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}


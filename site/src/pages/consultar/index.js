import Menu from '../../components/menu';
import Cabecalho from '../../components/cabecalho';
import { listarTodosVeiculos, buscarVeiculoPorModelo, removerVeiculo } from '../../api/userApi';
import './index.scss';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
import { useNavigate } from 'react-router-dom';

export default function Index() {
  const [conteudo, setConteudo] = useState([]);
  const [filtro, setFiltro] = useState('');

  const navigate = useNavigate('');


  function editarVeiculo(id) {
    navigate(`/alterar/${id}`);
  }


  function abrirDetalhes(id) {
    navigate(`/detalhe/${id}`);
  }


  async function removerVeiculoClick(id, nomeVeiculo) {

    confirmAlert({
      title: 'Remover veiculo',
      message: `Deseja remover o veiculo ${nomeVeiculo}?`,
      buttons: [
        {
          label: 'Sim',
          onClick: async () => {
            await removerVeiculo(id, nomeVeiculo);
            if (filtro === '') {
              carregarTodosVeiculos();
            } else {
              filtrar();
            }
            toast.dark('Veiculo removido!');
          }

        },
        {
          label: 'Não'
        }
      ]
    });
  }


  async function filtrar() {
    const resposta = await buscarVeiculoPorModelo(filtro);
    setConteudo(resposta);
  }


  async function carregarTodosVeiculos() {
    const resposta = await listarTodosVeiculos();
    setConteudo(resposta);
  }


  useEffect(() => {
    carregarTodosVeiculos();
  }, []);


  return (
    <main className='page page-consultar'>
      <Menu selecionado='consultar' />
      <div className='container'>
        <Cabecalho />

        <div className='conteudo'>

          <div className='caixa-busca'>
            <input type="text" placeholder='Buscar por marca' value={filtro} onChange={e => setFiltro(e.target.value)} />
            <img src='/assets/images/icon-buscar.svg' alt='buscar' onClick={filtrar} />
          </div>

          <table>
            <thead>
              <tr>
                <th>IDENTIFICAÇÃO</th>
                <th>VEICULO</th>
                <th>MARCA</th>
                <th>FABRICAÇÃO</th>
                <th>DESCRIÇÃO</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {conteudo.map(item =>
                <tr key={item.id} onClick={() => abrirDetalhes(item.id)}>
                  <td>{item.id}</td>
                  <td>{item.nomeVeiculo}</td>
                  <td>{item.marca}</td>
                  <td>{item.anoFabricacao.substr(0, 10)}</td>
                  <td>{item.descricao}</td>
                  <td>
                    <img src='/assets/images/icon-editar.svg' alt='editar'
                      onClick={e => {
                        e.stopPropagation();
                        editarVeiculo(item.id);
                      }} />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img src='/assets/images/icon-remover.svg' alt='remover'
                      onClick={e => {
                        e.stopPropagation();
                        removerVeiculoClick(item.id, item.nomeVeiculo);
                      }} />
                  </td>
                </tr>
              )}
            </tbody>
          </table>

        </div>
      </div>
    </main>
  )
}


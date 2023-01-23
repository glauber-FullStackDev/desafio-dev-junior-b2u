
import './index.scss';

export default function Index(props) {

  return (
    <div className='comp-detalhe'>
      <img src='/assets/images/logo.svg' alt='' />
      <div className='box-info'>
        <h1>{props.conteudo.nomeVeiculo}</h1>
        <div className='info'>
          <h3>Informações pessoais</h3>
          <p>{props.conteudo.donoNome}</p>
          <p>{props.conteudo.donoEmail}</p>
          <p>{props.conteudo.donoTelefone}</p>
        </div>
        <div className='info'>
          <h3>Marca</h3>
          <p>{props.conteudo.marca}</p>
        </div>
        <div className='info'>
          <h3>Fabricação</h3>
          <p>{props.conteudo.anoFabricacao && props.conteudo.anoFabricacao.substr(0, 10)}</p>
        </div>
        <div className='info'>
          <h3>Descrição</h3>
          <p>{props.conteudo.descricao}</p>
        </div>
      </div>
    </div>
  )
}
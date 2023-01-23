import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000'
})

export async function cadastrarVeiculo(nomeVeiculo, modelo, anoFabricacao, descricao, nomeDono, email, telefone) {
  const resposta = await api.post('/cadastrar', {
    nomeVeiculo: nomeVeiculo,
    modelo: modelo,
    anoFabricacao: anoFabricacao,
    descricao: descricao,
    nomeDono: nomeDono,
    emailDono: email,
    telefoneDono: telefone
  });

  return resposta.data;
};


export async function alterarVeiculo(id, nomeVeiculo, modelo, anoFabricacao, descricao, nomeDono, email, telefone) {
  const resposta = await api.put(`/veiculo/${id}`, {
    nomeVeiculo: nomeVeiculo,
    marca: modelo,
    anoFabricacao: anoFabricacao,
    descricao: descricao,
    nomeDono: nomeDono,
    emailDono: email,
    telefoneDono: telefone
  });

  return resposta.data;

}


export async function listarTodosVeiculos() {
  const resposta = await api.get('/listar');
  return resposta.data;
}


export async function buscarVeiculoPorModelo(marca) {
  const resposta = await api.get(`/listar/busca?marca=${marca}`);
  return resposta.data;
}


export async function removerVeiculo(id) {
  const resposta = await api.delete(`/veiculo/${id}`);
  return resposta.status;
}


export async function buscarPorId(id) {
  const resposta = await api.get(`/veiculo/${id}`);
  return resposta.data;
}


export async function validarEmail(id) {
  const resposta = await api.put(`/veiculo/${id}`);
  return resposta.data;
}
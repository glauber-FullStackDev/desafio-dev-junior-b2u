
import {
  alterarVeiculo, buscarPorId, buscarPorMarca, inserirVeiculo, listarTodosVeiculos, removerVeiculo, validarEmail
} from '../repository/userRepository.js'


import { Router } from 'express'
const api = Router();



api.post('/cadastrar', async (req, resp) => {
  try {
    const novoVeiculo = req.body;

    if (!novoVeiculo.nomeVeiculo) throw new Error('Nome do veiculo é obrigatório!');
    if (!novoVeiculo.modelo) throw new Error('Marca do veiculo é obrigatório!');
    if (!novoVeiculo.anoFabricacao) throw new Error('Ano de Fabricação do veiculo é obrigatória!');
    if (!novoVeiculo.descricao) throw new Error('descrição do veiculo é obrigatório!');
    if (!novoVeiculo.nomeDono) throw new Error('Nome do dono é obrigatório!');
    if (!novoVeiculo.emailDono) throw new Error('E-mail do Dono é obrigatório!');
    if (!novoVeiculo.telefoneDono) throw new Error('Telefone do Dono é obrigatório!');

    const emailExiste = await validarEmail(novoVeiculo.emailDono);
    if (emailExiste) throw new Error('Este e-mail está em uso');

    const veiculoInserido = await inserirVeiculo(novoVeiculo);
    resp.send(veiculoInserido);

  } catch (err) {
    resp.status(400).json({
      erro: err.message
    })
  }
})


api.get('/listar', async (req, resp) => {
  try {
    const resposta = await listarTodosVeiculos();
    resp.send(resposta);
  } catch (err) {
    resp.status(400).json({
      erro: err.message
    })
  }
})


api.get('/listar/busca', async (req, resp) => {
  try {
    const { marca } = req.query;

    const resposta = await buscarPorMarca(marca);

    if (resposta.length == 0)
      resp.status(404).send([])
    else
      resp.send(resposta);
  } catch (err) {
    resp.status(400).json({
      erro: err.message
    })
  }
})


api.get('/veiculo/:id', async (req, resp) => {
  try {
    const id = Number(req.params.id);

    const resposta = await buscarPorId(id);

    if (!resposta)
      resp.status(404).send([]);
    else
      resp.send(resposta);
  } catch (err) {
    resp.status(400).json({
      erro: err.message
    })
  }
})


api.delete('/veiculo/:id', async (req, resp) => {
  try {
    const { id } = req.params;

    const resposta = await removerVeiculo(id);
    if (resposta != 1) throw new Error('Veiculo não pode ser removido.');

    resp.sendStatus(204);
  } catch (err) {
    resp.status(400).json({
      erro: err.message
    })
  }
})



api.put('/veiculo/:id', async (req, resp) => {
  try {
    const { id } = req.params;
    const veiculo = req.body;

    if (!veiculo.nomeVeiculo) throw new Error('Nome do veiculo é obrigatório!');
    if (!veiculo.marca) throw new Error('Marca do veiculo é obrigatório!');
    if (!veiculo.anoFabricacao) throw new Error('Ano de Fabricação do veiculo é obrigatória!');
    if (!veiculo.descricao) throw new Error('descrição do veiculo é obrigatório!');
    if (!veiculo.nomeDono) throw new Error('Nome do dono é obrigatório!');
    if (!veiculo.emailDono) throw new Error('E-mail do Dono é obrigatório!');
    if (!veiculo.telefoneDono) throw new Error('Telefone do Dono é obrigatório!');

    const emailExiste = await validarEmail(veiculo.emailDono);
    if (emailExiste && emailExiste.id != id) throw new Error('Este e-mail está em uso');

    const resposta = await alterarVeiculo(id, veiculo);
    if (resposta != 1)
      throw new Error('Veiculo não pode ser alterado');
    else
      resp.sendStatus(204);

  } catch (err) {
    resp.status(400).json({
      erro: err.message
    })
  }
})




export default api;
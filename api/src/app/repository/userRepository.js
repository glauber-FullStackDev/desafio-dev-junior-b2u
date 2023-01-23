import { connection } from "./connection.js";


export async function inserirVeiculo(veiculo) {
  const comando =
    `INSERT INTO tb_carros (nome_veiculo, modelo, ano_fabricacao, descricao, dono_nome, dono_email, dono_telefone)
                    VALUES (?, ?, ?, ?, ?, ?, ?) `

  const [resposta] = await connection.query(comando, [veiculo.nomeVeiculo, veiculo.modelo,
  veiculo.anoFabricacao, veiculo.descricao, veiculo.nomeDono, veiculo.emailDono, veiculo.telefoneDono]);
  veiculo.id = resposta.insertId;

  return veiculo;
}


export async function listarTodosVeiculos() {
  const comando =
    `SELECT id,
            nome_veiculo         nomeVeiculo, 
            modelo               marca,
            ano_fabricacao       anoFabricacao,
            descricao,
            dono_nome            donoNome,
            dono_email           donoEmail,
            dono_telefone        donoTelefone
           FROM tb_carros`;

  const [linhas] = await connection.query(comando);
  return linhas;
}


export async function buscarPorId(id) {
  const comando =
    `SELECT nome_veiculo         nomeVeiculo, 
            modelo               marca,
            ano_fabricacao       anoFabricacao,
            descricao,
            dono_nome            donoNome,
            dono_email           donoEmail,
            dono_telefone        donoTelefone
      FROM tb_carros
      WHERE id = ? `;

  const [linhas] = await connection.query(comando, [id]);
  return linhas[0];
}



export async function buscarPorMarca(marca) {
  const comando =
    `SELECT id,
            nome_veiculo         nomeVeiculo, 
            modelo               marca,
            ano_fabricacao       anoFabricacao,
            descricao,
            dono_nome            donoNome,
            dono_email           donoEmail,
            dono_telefone        donoTelefone
      FROM tb_carros
      WHERE modelo like ? `;

  const [linhas] = await connection.query(comando, [`%${marca}%`]);
  return linhas;
}



export async function removerVeiculo(id) {
  const comando =
    `DELETE FROM tb_carros
               WHERE id = ? `;

  const [resposta] = await connection.query(comando, [id]);
  return resposta.affectedRows;
}




export async function alterarVeiculo(id, veiculo) {
  const comando =
    `UPDATE tb_carros
            SET nome_veiculo      = ?,
                modelo            = ?,
                ano_fabricacao    = ?,
                descricao         = ?,
                dono_nome         = ?,
                dono_email        = ?,
                dono_telefone     = ?
          WHERE id      = ?`;

  const [resposta] = await connection.query(comando, [veiculo.nomeVeiculo, veiculo.marca,
  veiculo.anoFabricacao, veiculo.descricao, veiculo.nomeDono, veiculo.emailDono, veiculo.telefoneDono, id]);
  return resposta.affectedRows;
}


export async function validarEmail(email) {
  const comando =
    `SELECT id,
              dono_email		emailDono
         FROM tb_carros
        WHERE dono_email = ? `;

  const [linhas] = await connection.query(comando, [email]);
  return linhas[0];
}
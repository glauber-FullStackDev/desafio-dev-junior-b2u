# CRUD Restful API de carros 

<h1 align="center">
  <br />
  <a href="https://www.linkedin.com/in/rodrigo-lanziotti-16a64966/">
  </a>
</h1>
<p align="center">
  <a href="#page_facing_up-descrição">Descrição</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#clipboard-Funcionalidades">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#closed_book-instalação">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#man-Autor">Autor</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

## :page_facing_up: Descrição

Projeto feito para a candidatura para a vaga de Desenvolvedor Fullstack Júnior na BitcoinToYou e que consiste de um CRUD de carros (criar, listar, visualizar, editar e excluir).

## 🛠 Tecnologias

### App

- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/pt-br/)
- [Cors](https://www.npmjs.com/package/cors)
- [Knex](https://knexjs.org/)
- [Joi](https://joi.dev/api/?v=17.7.0)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Nodemon](https://github.com/remy/nodemon#nodemon)
- [Swagger](https://swagger.io/docs/)

### Banco de Dados

- [PostgreSQL](https://www.postgresql.org/docs/)

## :clipboard: Funcionalidades

- Cadastro de um Carro
- Listagem dos Carros
- Visualização dos dados de um Carro específico
- Edição dos dados de um Carro específico
- Exclusão de um Carro específico

## :closed_book: Instalação

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### Iniciando Back-End

- Abra o VSCode na sua pasta de preferência
######
- Com o terminal aberto, faça o clone deste repositório;
`$ git clone https://github.com/lanziotti/desafio-dev-junior-b2u.git`
######
- Navegue até a pasta onde esta o app;
`$ cd desafio-dev-junior-b2u/backend`
######
- Instale as dependências;
`$ yarn ou npm install`
######
- Na pasta raíz do projeto, crie um arquivo `.env` usando como base o arquivo já existente `.env.example` e preencha os valores das variáveis sem haver nenhum espaço entre os caracteres. Exemplo:

```
PORT=3000

DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASS=123456
DB_NAME=bitcointoyou_carros
````
OBS: As variáveis que começam com "DB_" são referentes ao banco de dados. Portanto, antes desse processo, o banco de dados já deve estar criado. Para isso, pode-se usar um Gerenciador de Banco de Dados como o [Beekeeper Studio](https://www.beekeeperstudio.io/)
######

- Execute a aplicação;
`$ yarn dev ou npm run dev`
######

- O app vai está rodando na porta 3000 (de acordo com o exemplo acima) 
######

- Acesse <http://localhost:3000/api-docs> para testar os endpoints pelo Swagger

## :man: Autor
<a href="https://github.com/lanziotti/">
 <br />
 <sub><b>Rodrigo Lanziotti (Github)</b></sub>
</a>
<a href="https://www.linkedin.com/in/rodrigo-lanziotti-16a64966/">
 <br />
 <sub><b>Rodrigo Lanziotti (LinkedIn)</b></sub>
</a>

######

Feito por Rodrigo Lanziotti :wave::wave: Entre em contato sempre que quiser!🚀

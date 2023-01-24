### Bit Cars
API de gerenciamentos de veiculos de um e-commercee

## 💻 O projeto
 Bit Cars é uma API focada em um CRUD de usuarios e veiculos!


## Features da API

 - Cadastro de Usuário
 - Login
 - Cadastro de veiculos
 
 Em todas essas features é possível com autenticação do sistema , criar , atualizar, listar, e deletar dados.
 
 ## Instalação

 Faça o clone deste repositório
```bash
  git clone git@github.com:anthonifelipi/desafio-dev-junior-b2u.git
```
```bash
  cd desafio-dev-junior-b2u.git
```
```bash
  cd backend
```
Adicione as variáveis de ambiente citadas a seguir no seu .env

`DATABASE_URL="postgresql://your_postgres_user:your_postgres_password@localhost:5432/your_postgres_db?schema=public"`

`DB_USER= `

`DB_POSTGRES= `

`DB_PASSWORD= `

`SECRET_KEY= `

`JWT_SECRET= `
 
 Faça a conexão ao seu PostgreSQL e crie seu banco de dados SQL:

```bash
  CREATE DATABASE <NOMEDOBANCO>;
```
instalar as dependencias da aplicação
```bash
  yarn install
```

Gerar/Rodar suas migrations:

```bash
  yarn prisma migrate dev --name createDb
```

E por ultimo rode a aplicação com o comando a seguir(a porta default é a localhost:3333)
```bash
  yarn dev
```
 
 ## Exemplo de cadastros para testes somente no backEnd
 ```
 Registro de pessoas
  {
	"name": "anthoni felipi",
	"password": "bitCoinToYou@",
	"email": "anthonifelipi@gmail.com",
	"phone": "99978772"
}
Registro de veiculos
 {
	"name": "civic",
	"brand": "honda",
	"year": "22",
	"description": "Carro unico dono, em perfeito estado"
}
  
```
 
 ## Tecnologias Utilizadas 
 
  -  [x] NodeJS 16
  -  [x] Express
  -  [x] Prisma
  -  [x] PostgreSQL
  -  [x] TypeScript
  -  [x] Bcrypt (Criptografia de Senhas)
  -  [x] JWT (Token de Autenticação)
  -  [x] Cors

## Equipe de Desenvolvimento<br>

<table>
  <tr>
   <td align="center">
      <a href="https://github.com/anthonifelipi">
        <img src="https://ca.slack-edge.com/TQZR39SET-U02EYVC3F9D-8a2e8c57cdcc-72" width="100px;" alt="Anthoni Felipi"/><br>
        <sub>
          <b>Anthoni Felipe</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

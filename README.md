# Desafio - Desenvolvedor Fullstack - David Bassouto
## Utilização da API

David Bassouto

[Repositório front-end](https://github.com/DavidBassouto/teste-bitcointoyou-front-davidbassouto)

## Instruções

- Clonar este repositório (back-end)
- Instalar as bibliotecas (yarn add / npm install)
- Configurar arquivo .env , tendo como modelo o arquivo _.env.exemple_
- Rodar as Migrations (yarn typeorm migration:run -d src/data-source)
- Conectar servidor ao database com o comando _yarn dev_
- Acessar a [aplicação Front-end](https://teste-bitcointoyou-front-davidbassouto.vercel.app/), hospedada no **Vercel**

## Guia Front-End

- botao **+** insere novo produto no banco de dados
- produto adicionado é listado à esquerda
- cliando no produto listado, mais informações sobre o produto sao carregadas à direita
- após carregar mais informaçoes sobre um produto, é possivel editá-lo ou removê-lo
- para editar: clicar no botao Editar
- para remover: clicar no ícone de lixeira
- para buscar um produto, digitar texto pretendido no campo "Buscar produtos"

## Guia Back-End

_Rota de Criação de veículo_

- POST: /cars
  > {
  > "name":"Palio",
  > "brand":"Chevrolet",
  > "price":17500,
  > "year":2003,
  > "description":"Carro econômico, confortavel e de manutanção em conta",
  > "owner":{
  > "name":"david",
  > "email": "davidbassoutodev@gmail.com",
  > "cellphone": "31991970713"
  > }
  > }


  Retorno Esperado:

  > "message": "Car created with success",
  > "car": {
  > "name": "Palio",
  > "brand": "Chevrolet",
  > "price": 17500,
  > "year":2003,
  > "description": "Carro econômico, confortavel e de manutanção em conta",
  > "owner": {
  > "id": "6d7c264e-fd76-464a-b2c6-f216d1dd9966",
  > "name": "david",
  > "email": "davidbassoutodev@gmail.com",
  > "cellphone": "31991970713"
  > },
  > "id": "9d0c1424-c531-4f7b-935e-1e3bf04eba4b",
  > "created_at": "2023-01-20T15:15:11.130Z",
  > "updated_at": "2023-01-20T15:15:11.130Z"
  > }
  > }

_Rota de Listagem de todos os veículo_

- GET: /cars

_Rota de Listagem de veículo por ID_

- GET: /cars/:carID

_Rota de Listagem de todos os veículos de um mesmo Proprietário_

- GET: /cars/owner/ownerID

_Rota de deletar um veículo por ID_

- DELETE: /cars/:carID

_Rota de editar um veículo por ID_

- PATCH: /cars/:carID

**Observações:**

> - Carros com dados persistidos em memoria, utilizando TypeORM e Postegres;
> - Tanto o carro quanto o proprietário tem um identificador único
> - Proprietário e veículos possuem relacionamento de um para vários, ou seja, um mesmo usuário pode ter varias veículos
>   mas um veículo pertence a apenas um usuário.

![Bitcointoyou](https://bitcointoyou.com/_next/static/media/logoAzul.c6609791.png)
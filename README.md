![Bitcointoyou](https://bitcointoyou.com/_next/static/media/logoAzul.c6609791.png)

# Desafio - Desenvolvedor Fullstack - Júnior
Seja bem-vindo! Este desafio foi projetado para avaliar a sua capacidade técnica como candidato ao cargo proposto.

# CarAdHouse

## Instruções para rodar o projeto
- entre individualmente nas pastas "api" e "front" pelo terminal e use o comando abaixo para instalar as dependências:
```
npm install
```

- entre pelo terminal na pasta "api" e utilize o comando abaixo para criar um container docker para nosso banco de dados mysql:
```
docker compose up -d
```

- ainda no mesmo terminal da pasta "api" utilize o comando abaixo para criar a base de dados "admin" dentro do nosso container mysql:
```
npx sequelize-cli db:create -- --url 'mysql://root:example@3306/admin'
```

- agora criaremos as tabelas do nosso banco de dados rodando as migrations com o seguinte comando:
```
npx sequelize db:migrate
```

- caso seja necessário reverter as migrations, utilize o comando abaixo
```
npx sequelize db:migrate:undo:all
```

- agora é só colocar o servidor do backend para rodar, use o comando abaixo
```
npm run dev
```

- com o nosso servidor em execução, abra outro terminal, entre na pasta do front-end da aplicação e utilize o comando abaixo
```
cd front
```
```
npm run dev
```
- Agora é só dar um ctrl + click na rota que aparecerá no terminal
- A pasta "images" serve como referência de imagem na hora que for cadastrar um anuncio de carro

# Tecnologias usadas
## Front-end
- JavaScript
- ReactJs

## Back-end
- TypeScript
- Node
- Sequelize

## Banco de Dados
- MySql
- Docker
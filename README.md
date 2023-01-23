![Bitcointoyou](https://bitcointoyou.com/_next/static/media/logoAzul.c6609791.png)

# Desafio - Desenvolvedor Fullstack - Júnior
Seja bem-vindo! Este desafio foi projetado para avaliar a sua capacidade técnica como candidato ao cargo proposto.

# CarAdHouse

## Instruções para rodar o projeto
- entre individualmente nas pastas API e Front pelo terminal e use o comando abaixo para instalar as dependências:
```
npm install
```

- entre pelo terminal na pasta API e utilize o comando abaixo para criar um container docker para nosso banco de dados mysql:
```
docker compose up -d
```

- ainda no mesmo terminal da pasta API utilize o comando abaixo para criar a base de dados "admin" dentro do nosso container mysql:
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
cd Front
```
```
npm run dev
```
- Agora é só dar um ctrl + click na rota que aparecerá no terminal
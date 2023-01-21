<h1>📢 Desafio - Desenvolvedor Fullstack - Júnior 📢</h1>

## ⚡ Features ⚡

- [x] Login Page 
- [x] Autenticação com username/senha
- [x] Listar, visualizar, criar, editar, excluir e buscar
- [x] Conexão com banco de dados NOSQL (MongoDB - AWS/SP)
- [x] Responsividade

<br/>

## 🤔 Como iniciar o sistema?
<p>💡 Aqui está as instruções de como iniciar o projeto</p>

<br/>

```bash
# Clonando o repositório
$ git clone <https://github.com/EmersonNog/desafio-dev-junior-b2u>

# Entrando na pasta raiz do projeto
$ cd desafio-dev-junior-b2u
$ cd Desafio

# Instalando as dependências do arquivo package.json
$ yarn install
```
<br/>

### 🎲 Rodando o Back-end na porta:3000
```bash
$ yarn dev
```

### 🎲 Rodando o Front-end na porta:3001
```bash
$ yarn start
# irá aparecer essas mensagens:
$ ? Something is already running on port 3000.
$ Would you like to run the app on another port instead? » (Y/n)
# Pressione o "y"
$ y
```

---
</br>

# 🕵🏻 Aplicação

## 🔒 Login de acesso

```
Username: bitcoin
Password: bitcoin
```

## 🏡 Home Page
```
A página principal da aplicação, mostra uma introdução ao objetivo geral.
```

## 📋 Tela de Cadastro de anúncios
```
Nessa área pode-se cadastrar os dados pedidos no desafio, dados relacionados ao carro e ao dono.
```

## 📰 Tela de catálogo com os anúncios
```
Aqui será listado todos os anúncios podendo editar, remover e também adicionei uma função de fazer buscas.
```

## 📜 Tela de About
```
Página onde faço uma conclusão do projeto.
```

---
</br>

## 👨‍💻 Tecnologias utilizadas
<br/>

🛠️ As seguintes ferramentas foram usadas na construção do projeto:

- [ReactJS](https://pt-br.reactjs.org/)
- [NodeJS](https://nodejs.org/en/)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [Express](https://expressjs.com/pt-br/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Nodemon](https://nodemon.io/)
- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)

---

<br/>
<br/>

## 🏛️ Arquitetura do Projeto

<br/>

```markdown
src/
  ├── assets/
  │     └── carros/
  │
  ├── components/
  │     ├── Catalogo/
  │     │    
  │     ├── Input/
  │     │
  │     ├── Layouts/
  │     │
  │     ├── Pages/
  │     │    
  │     └── Services/
  │
  ├── server/
  │     ├── config/
  │     │
  │     ├── controllers/
  │     │
  │     ├── models/
  │     │
  │     ├── routes.js
  │     │
  │     └── server.js
  │     
  ├── App.js
  └── index.js
```

Made by Emerson N. Santos 👨🏼‍💻 - [LinkedIn](https://www.linkedin.com/in/noggueira)

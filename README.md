## Site de anúncios de carros


Projeto de um site de anúncios de carros onde voce pode criar um anuncio, listar seus anúncio ou ver um anúncio específico de um carro, editar ou deletar o anúncio. Quando abrimos um anúncio especifico, conseguimos visualizar as informações do proprietario do carro.

## Para rodar:
```bash


git clone https://github.com/thifelipesilva/desafio-dev-junior-b2u.git

cd desafio-dev-junior-b2u

cd api-venda-carros

docker compose -f docker.compose.dev.yml up -d --build

cd ..

npm install

npm start

```



## Este projeto foi criado com as tecnologias listadas abaixo

## back-end:

Node.js - Typescript
Docker -> Utilizado para construir a imagem da API e o docker compose para Subir o container da API e do DB.
Express -> Criar servido e gerenciar as rotas
Overnightjs -> Essa lib auxilia o express com decorators.
mongoose -> Facilitar a comunicação com o MONGODB



## Front-End:

React - Typescript
react-router-dom -> para auxiliar na criacao do 
styled-componets -> auxiliar no css


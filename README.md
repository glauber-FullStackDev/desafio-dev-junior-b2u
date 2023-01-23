# Desafio Dev Junior B2U

[Pré requisitos](#pre-requisitos) |
[Download e instalação](#download-e-instalação) |
[Documentação](#documentação)


## Pré requisitos
Para rodar este projeto é necessário:
 * Docker e docker-compose instalados.
   * Para ajuda na instalação, vá até [Docker](https://docker.io).
 * Node.js e npm instalados.
   * Para ajuda na instalação, vá até [Nodejs](https://nodejs.io).
 * Git instalado.


## Download e instalação

Clone este repositório:

```sh
# clonando o repositório
git clone https://github.com/passoz/desafio-dev-junior-b2u.git
```

Entre no diretório:

```sh
# entrando no repositório
cd desafio-dev-junior-b2u
```
Faça uma cópia do arquivo de exemplo .env.example para .env e altere a variável BACKEND_HOST para o local de hospedagem da api:

Altere de:
```
BACKEND_HOST=
```
Para:
```
BACKEND_HOST=<your-backend-hosting>

E também de:
```
POSTGRES_PASSWORD=
POSTGRES_USER=
```
Para:
```
POSTGRES_PASSWORD=<your-password>
POSTGRES_USER=<your-username>
```

Inicie a aplicação:

```sh
# iniciando aplicação
npm start
```

Para parar a aplicação execute:

```sh
# iniciando aplicação
npm stop
```

## Documentação

[Clique aqui e acesse a documentação](https://passoz.github.io/desafio-dev-junior-b2u/)
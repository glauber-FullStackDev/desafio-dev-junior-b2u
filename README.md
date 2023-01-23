# Desafio Dev Junior B2U

[O projeto](#o-projeto) |
[Tecnologias utilizadas](#tecnologias-utilizadas) |
[Pré requisitos](#pre-requisitos) |
[Download e instalação](#download-e-instalação) |
[Documentação](#documentação)

## O projeto
Sistema fullstack para cadastro de anúncios de veículos.

## Tecnologias utilizadas
 * [NodeJS](https://nodejs.org)
 * [Typescript](https://www.typescriptlang.org/)
 * [React](https://reactjs.org/)
 * [Prisma](https://prisma.io)
 * [Postgresql](https://postgresql.org)
 * [Docker](https://docker.com)


## Pré requisitos
Para rodar este projeto é necessário:
 * Docker e docker-compose instalados.
   * Para ajuda na instalação, vá até [Docker](https://docker.io).
 * Node.js e npm instalados.
   * Para ajuda na instalação, vá até [Nodejs](https://nodejs.org).
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
Faça uma cópia do arquivo de exemplo .env.example para .env e altere a variável BACKEND_HOST para o local de hospedagem da api.

### Backend
Altere de:
```
BACKEND_HOST=
```
Para:
```
BACKEND_HOST=<your-backend-hosting>
```
Exemplo:
```
BACKEND_HOST=api.example.com
```
Se estiver utilizando localmente, utilize o endereço IP do seu computador:
```
BACKEND_HOST=<your-machine-ip>
```
Ou como "localhost":
```
BACKEND_HOST=localhost
```
### Frontend
Altere de:
```
FRONTEND_HOST=
```
Para:
```
FRONTEND_HOST=<your-frontend-hosting>
```
Exemplo:
```
FRONTEND_HOST=www.example.com
```

Se você possuir um endereço IP fixo válido e um domínio próprio, aponte o DNS para a o local da instalação e automaticamente será validado um certificado SSL para a URL do frontend.

### Banco de dados
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
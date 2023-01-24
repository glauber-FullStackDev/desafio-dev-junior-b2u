# Desafio Dev Junior B2U

[O projeto](#o-projeto) |
[Tecnologias utilizadas](#tecnologias-utilizadas) |
[Pré requisitos](#pre-requisitos) |
[Download e instalação](#download-e-instalação) |
[Melhorias](#melhorias) |
[Documentação](#documentação)

## O projeto
Sistema fullstack para cadastro de anúncios de veículos.

## Tecnologias utilizadas
 * [NodeJS](https://nodejs.org)
 * [Typescript](https://www.typescriptlang.org/)
 * [React](https://reactjs.org/)
 * [Prisma](https://prisma.io)
 * [Caddy](https://caddyserver.com)
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
Faça uma cópia do arquivo de exemplo .env.example para .env e altere as variáveis abaixo para personalização. O arquivo .env.example já vem pré-configurado para o funcionamento básico do sistema.

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
Se estiver utilizando localmente, utilize o endereço IP do seu computador como no exemplo:
```
BACKEND_HOST=192.168.1.200
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
Exemplo:
```
POSTGRES_PASSWORD="minhasenha"
POSTGRES_USER="meuusuario"
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

A aplicação estará disponível para acesso HTTP na porta 80 (Redirecionado para a porta 443 SSL) e o backend estará respondendo na porta 3000.

## Melhorias
Pontos de melhorias para as próximas versôes:
  * Padronização de mensagens de tratamento de erros.
  * API Gateway para o Backend e autenticação/integração com Keycloak.
  * Balanceamento de carga para o Frontend e autenticação/integração com Keycloak.
  * Aplicar técnicas de cache local e remoto com Redis.
  * CI/CD através do Github Actions para geração dos artefatos e deploy.
  * Deploy dos artefatos para o Docker Registry.
  * Manifestos para Kubernetes e Helm charts.
  * Monitoramento de perfermance e tráfego (Observabilidade).
  * Cobertura de testes unitários e de integração.
  * Documentação.
  

## Documentação

[Clique aqui e acesse a documentação](https://passoz.github.io/desafio-dev-junior-b2u/)
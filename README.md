
## Instalação

Requisito necessário: [node](https://nodejs.org/en/). Entre na pasta do front e instale as dependências
 
```bash
cd four-wheels
npm install
```

## Configuração
criar um .env com a seguinte configuração

```.env
VITE_URL=http://localhost:1337
```

## Rodar com dados fake json-server

```bash
cd four-wheels
npm run dev
```
## Rodar brackend

```bash
cd api-four-wheels
npm install
npx prisma migrate dev --name init
npm start
```


## License

[MIT](https://choosealicense.com/licenses/mit/)
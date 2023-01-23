# Passo a passo de como rodar o projeto localmente
### Clone o repositório com o comando
```bash
git clone https://github.com/diegocruz-s/desafio-dev-junior-b2u
```
### Entre na pasta desafio-dev-junior-b2u

# Backend
### Na raíz do diretório **server** crie um arquivo **.env** e o preencha com as seguintes informações
```bash
DATABASE_URL="file:./dev.db"
TOKEN_SECRET="texto que você quiser"
```
### Obs: os próximos comandos devem ser executados em algum terminal
### Entre no diretório **server**
```bash
cd server
```
### Instale as dependências do projeto
```bash
npm i 
    ou
npm install
```
### Rode a seed do projeto
```bash
npx prisma db seed
```
### Execute o seguinte para rodar o backend e deixe ele rodando(não feche o terminal)
```bash
npm run dev
```
# Frontend
### Em outro terminal entre no diretório web
```bash
cd web
```
### Instale as dependências do projeto
```bash
npm i 
    ou
npm install
```
###  Execute o seguinte para rodar o frontend e deixe ele rodando(não feche o terminal)
```bash
npm run dev
```
### Clique no link gerado pelo comando para acessar o projeto 


### Ao gerar a seed do projeto dois usuários e quatro carros serão gerados para a aplicação não estar sem nada ao ser iniciada. Um destes usuários possui as seguintes credenciais caso queira usá-lo para entrar na aplicação: 
```bash
email: teste@gmail.com
senha: Teste@123
```
### Este usuário possui o nome Diego e tem dois carros registrados no sistema

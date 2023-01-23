![Bitcointoyou](https://bitcointoyou.com/_next/static/media/logoAzul.c6609791.png)

# Desafio - Desenvolvedor Fullstack - Júnior

### Nome: Adriel Alberto
### Email: adrieldev@outlook.com
### Linkedin: https://www.linkedin.com/in/adrieldev


## Instruções
- Abrir um terminal e seguir o roteiro de comandos:
- git clone git@github.com:adrielldev/desafio-dev-junior-b2u-adriel-alberto.git 
  -> Clona o repositório na sua máquina
- cd desafio-dev-junior-b2u-adriel-alberto/backend && touch .env
  -> Move para o backend da aplicação e cria um arquivo .env
- cp .env.example .env => Irá abrir um diálogo, digite y e enter.
  -> Copia o conteúdo de .env.example para .env, digite y quando perguntar se deseja sobrescrever o arquivo .env
- cd ..
  -> Volta para a root do projeto.
- docker-compose up 
(Acaso dê erro com o postgres será necessário desativar o postgres, para isso use: 'sudo service postgresql stop', depois de testar a aplicação basta apenas rodar 'sudo service postgresql start')
  -> Sobe o container da aplicação
- Abrir outra guia do terminal e usar o comando: docker exec -it prisma-postgres-api npx prisma migrate dev
  -> Esse último passo serve para fazermos as migrações desejadas para nosso postgres estamos usando o prisma-postgres-api 
  uma imagem do ORM prisma. Digite um nome qualquer para a migração que irá abrir na caixa de diálogo.
- Após isso a aplicação estará rodando em http://localhost:5173
  -> Basta acessar a web no site acima e testar
  
 ### Backend 
 
- Tecnologias Usadas:
 <br>
 <div> 
 <img src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/typescript/typescript-original.svg' width='40px'></img>
  <img src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/nodejs/nodejs-original-wordmark.svg' width='40px'></img>
   <img src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/express/express-original.svg' width='40px'></img>
    <img src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/postgresql/postgresql-original.svg' width='40px'></img>
    <img src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/docker/docker-original.svg' width='40px'></img>
    <img src='https://cdn.freelogovectors.net/wp-content/uploads/2022/01/prisma_logo-freelogovectors.net_.png' width='40px'></img>
    </div>
    <br> 
    
 - Descrição:
  Como o projeto pedia que o carro necessariamente tivesse um dono, resolvi tornar a aplicação mais prática e por isso também inclui um crud
  de usuário na api, a documentação da api bem como o DER podem ser lidos em <a href='https://github.com/adrielldev/desafio-dev-junior-b2u-adriel-alberto/blob/master/backend/Api.md'> Docs</a>.
  
  <br>
  
### Frontend

- Tecnologias Usadas:

<br>

<div>
<img src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-original.svg' width='40px'></img>
<img src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original.svg' width='40px'></img>
<img src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/tailwindcss/tailwindcss-plain.svg' width='40px'></img>
<img src='https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/figma/figma-original.svg' width='40px'>

</div>

 <br>
 
- Descrição:
A maior parte da UI do projeto me baseei no próprio site da empresa, também fiz um pequeno <a href='https://www.figma.com/file/Nyro1ngF1nuF4GuYrjeYXQ/bitcoin-to-you-teste-adrieldev?node-id=0%3A1&t=KN4c4RCtgbrESfOX-0'/>Figma </a> para me guiar com as cores e componentes. O fato de também ter adicionado uma tabela de usuários trouxe muitas outras features interessantes que pude aproveitar no front-end, como listagem dos carros de um usuário específico, a quantidade de carros. A validação de formulários é feita usando o yup e o react-hook-form, também usei uma biblioteca de notificações (toastify) para tornar a experiência do usuário a mais clara possível. 



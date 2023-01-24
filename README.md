![Bitcointoyou](https://bitcointoyou.com/_next/static/media/logoAzul.c6609791.png)

# Passo a passo de como rodar a aplicação:

-Certifique-se de que você possui o Node, instalado em sua máquina.

-Utilizei o Docker apenas para o MySQL, portanto se você possui o MySQL e Docker instalados em sua máquina, ficará ao seu critério de rodar localmente ou com docker.

<details>
   <summary><h3>Conectando ao MySQL</h3></summary>
  
  ### Rodando com docker:

Caso tenha o docker e o docker-compose plugin instalados em sua máquina, rode:

`docker-compose up -d`

Mesmo após a inicialização, recomendo aguardar um pouco para o mysql se inicializar completamente.

Após isso o container que possui a imagem do MySQL estará pronto para o uso.

Na própria pasta `/backend` do projeto já tem um `.env` configurado para conectar com o mysql do container.

### Rodando localmente:

Com o Mysql instalado na máquina localmente, você precisa apenas alterar as variaveis do arquivo .env `MYSQL_PORT=3306` e `MYSQL_PASSWORD=(sua senha do mysql)`

</details>

<details>
  <summary><h3>Inicializando a aplicação</h3></summary>
  
  Com o mysql rodando nós precisamos criar o banco de dados.
  
  `npm run db:reset`
  
  Esse comando irá derrubar, criar e popular o banco de dados a cada vez que for utilizado.
  
  Com o banco de dados pronto para ser usado, rode o comando no terminal `npm start` na pasta `/backend` e para ver se está funcionando escreva `http://localhost:3001/carros` no seu navegador.
  
  Se estiver tudo ok, já podemos subir o frontend.
  
  Abra um novo terminal e acesse a pasta `/frontend` e rode também o `npm start`.
  
  Após isso a aplicação estará pronta para o uso.
  
</details>

Acesse: `http://localhost:3000/` para utilizar a aplicação após os passos acima.

<h1>API Criadores de Conteudo</h1>

Conheça o meu primeiro projeto Full-stack!

<span>O backend deste projeto foi desenvolvido com NodeJs, Postgres e Sequelize.</span>
<br><br>
<span>O Front-end é desenvolvido com ReactJs.</span>
<br><br>
<p>Para rodar o projeto localmente siga os seguintes passos</p>
<ul>
  <li>
    git clone https://github.com/Marcelo1080p/API_criador_conteudo
  </li>
  <li>
    vá atá o diretório do projeto e execute o seguinte comando: "npm install" ou "npm i", para baixar as dependências do projeto
  </li>
  <li>
    navegue até a pasta backend e frontend para rodar o projeto: <br>
    comandos: backend - 1) cd backend, 2) nodemon scr/index.js. <br>
    comandos: frontend - 1) cd frontend, 2) npm run dev.<br>
  </li>
<ul/>
<hr>
<span>Para adicionar os seus criadores de conteúdos favoritos você pode usar o <strong>Postman</strong></span>
 
<span>No <strong>Postman<strong>, crie uma request <strong>Post</strong> <br>
  a rota para usar na url é: http://localhost:3001/criador; <br>
  os dados necessários para passar no body são: {<br>"
      "nome": "Nome do Criador",<br>
    "tipoDev": "Se é front/back/fullstack",<br>
    "imgLink": "link da img, ex: https://github.com/Marcelo1080p.png", <br>
     "insta": "Link do insta do criador",<br>
     "youTube: "Link do canal do criador",<br>
  "}
</span>
  <br><br><br>
  
<h2>Visual do front-end</h2><br>
  
  <img src="./Frontend/src/assets/imgCriadores.png"/>
<hr>
<br>
<h4>Você poderá encontrar o seu criador favorito pesquisando pelo nome!</h4>

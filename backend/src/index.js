// import o modulo express
const express = require("express");
const cors = require('cors');    // modo de seguranca
const routes = require("./routes");

// extancio a variavel app
const app = express(//{
   // origin: 'http://meuapp.com' // define quem acessa a aplicacao
//}
);

app.use(cors());
app.use(express.json()); // diz que vai trabalhar com json
app.use(routes);
// define rota principal / 
//app.get('/', (request, response) =>{
//    return response.send('Hello Word');
//})

// trabalhando com QUERY
//app.post('/users', (request, response) =>{
    // acessa tudos os parametros passados no navegador get
//    const params = request.query;
//    return response.json({
//        evento: 'Semana OmniStack 11.0',
 //       aluno: 'Diego'
 //   });
//})

// trabalhando com PARAMS
//app.get('/users/:id', (request, response) =>{
    // acessa o /:id
 //   const params = request.params;
 //   return response.json({
 //       evento: 'Semana OmniStack 11.0',
 //       aluno: 'Diego'
 //   });
//})



// porta de vai escutar a pagina
app.listen(3333);

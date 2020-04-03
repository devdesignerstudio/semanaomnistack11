const express = require('express');

//const connection = require('./database/connection');
const OngController = require('./controllers/OngController'); 
const CasoController = require('./controllers/CasoController'); 
const PerfilController = require('./controllers/PerfilController'); 
const SessaoController = require('./controllers/SessaoController'); 

const routes = express.Router();

routes.post('/sessions', SessaoController.create);

routes.get( '/ongs', OngController.index);
//routes.post('/ongs',async(request,response) => {})
routes.post('/ongs', OngController.create);

routes.get('/profile', PerfilController.index);

routes.get('/casos', CasoController.index);
routes.post('/casos', CasoController.create);
routes.delete('/casos/:id', CasoController.delete);
//  routes.get('/users/:id',(request,response) => {
//     const params = request.params;
    
//     console.log(params);

//     //return response.send('Olá Célio!');
//     return response.json({
//         evento: 'Semana OmniStack 11.0 - 2020',
//         aluno: 'Aluno : Célio Pontes'
//     })
// })

//  routes.get('/users',(request,response) => {
//     const params = request.query;
    
//     console.log(params);

//     //return response.send('Olá Célio!');
//     return response.json({
//         evento: 'Semana OmniStack 11.0 - 2020',
//         aluno: 'Aluno : Célio Pontes'
//     })
// })

// routes.get('/',(request,response) => {
//     //return response.send('Olá Célio!');
//     return response.json({
//         evento: 'Semana OmniStack 11.0 - 2020',
//         aluno: 'Aluno : Célio Pontes'
//     })
 //})

module.exports = routes;
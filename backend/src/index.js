const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar/Listar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Apagar uma informação no back-end
  */

  /* Tipos de parâmetros:

  Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros,paginação)
  Route Params: Parâmetros utilizados para identificar recursos
  Request Body: Corpo da requisição utilizado para criar ou alterar recursos
  */

  /**
   * Banco de dados
   * SQL: MySQL, PostgreSQL, SQLite, Oracle, Microsoft SQL Server, IBM db2
   * NoSQL: Mongodb, couchDB, Cassandra etc
   */

/**
 * Driver: SELECT * FROM users
 * Query Builder javascript: table('users').select('*').where()
 */

 

app.listen(3333);

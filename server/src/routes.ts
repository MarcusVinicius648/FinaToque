import express from 'express';
import knex from 'knex';

import ProdutoController from './controllers/ProdutoController';

const routes = express.Router();
const produtoController = new ProdutoController();

routes.post('/produto', produtoController.create);
routes.get('/produto', produtoController.show)
export default routes
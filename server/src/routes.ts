import express from 'express';
import knex from 'knex';

import ProdutoController from './controllers/ProdutoController';

const routes = express.Router();
const produtoController = new ProdutoController();

routes.post('/produtos', produtoController.create);
routes.get('/produtos', produtoController.show);
export default routes
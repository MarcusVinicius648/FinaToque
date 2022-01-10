import express from 'express';
import knex from 'knex';

import ProdutoController from './controllers/ProdutoController';

const routes = express.Router();
const produtoController = new ProdutoController();

routes.post('/produtos', produtoController.create);
routes.get('/produtos', produtoController.show);
routes.get('/produtos/:id', produtoController.editable);
routes.put('/produtos/:id', produtoController.change);
routes.put('/produtos/:id', produtoController.update);
routes.delete('/produtos/:id', produtoController.delete);

export default routes
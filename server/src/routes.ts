import express from 'express';
import knex from 'knex';

import ProdutoController from './controllers/ProdutoController';
import ControlController from './controllers/ControlController';

const routes = express.Router();
const produtoController = new ProdutoController();
const controlController = new ControlController();

routes.post('/produtos', produtoController.create);
routes.get('/produtos', produtoController.show);
routes.get('/produtos/:id', produtoController.editable);
routes.put('/produtos/:id', produtoController.change);
routes.put('/produtos/:id', produtoController.update);
routes.delete('/produtos/:id', produtoController.delete);

routes.put('/control/:id', controlController.update)

export default routes
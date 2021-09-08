import express from 'express';
import routes from './routes';

const app = express();

// GET: buscar informações no back-end;
//POST: criar uma nova informação no back-end;
//PUT: Atualizar uma informação já existente;
//DELETE: remover uma informação do back-end;

app.use(routes);
app.use(express.json());
app.listen(3333);
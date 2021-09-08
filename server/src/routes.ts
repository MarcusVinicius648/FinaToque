import express from 'express';

const routes = express.Router();

routes.get('/users', (request, response) => {
    response.json(['Hello World']);
});

export default routes
import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    // {} = para um único retorno;
    // [] = para múltiplos retornos;
    response.json(['Hello World']);
});

app.listen(3333);
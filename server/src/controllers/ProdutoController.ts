import { Response, Request } from 'express';

import Knex from '../database/connection';

class ProdutoController {
    async create(request: Request, response: Response) {
        const {
            nome,
            valorCompra,
            valorVenda,
            quantidade
        } = request.body;

        const produtos = {
            nome,
            valorCompra,
            valorVenda,
            quantidade
        };

        await Knex('produtos').insert(produtos);

        return response.json({ sucess: true })
    }

    async show(request: Request, response: Response) {
        const produto = await Knex('produtos').select('*');

        const serializedItems = produto.map(produt => {
            return {
                id: produt.id,
                nome: produt.nome,
                valorVenda: produt.valorVenda,
                valorCompra: produt.valorCompra,
                quantidade: produt.quantidade
            };
        });
        return response.json(serializedItems);
    }

    async change(request: Request, response: Response) {
        const { id } = request.params;

        const {
            nome,
            valorCompra,
            valorVenda,
            quantidade
        } = request.body;

        const produto = {
            nome,
            valorCompra,
            valorVenda,
            quantidade
        };

        await Knex('produtos').update(produto).where('id', id);
        return response.json({ sucess: true })
    }

    async editable(request: Request, response: Response) {
        const { id } = request.params

        const produto = await Knex('produtos')
            .select('produtos.*')
            .where('produtos.id', id)
            .first();

        return response.json(produto);
    }

    async update(request: Request, response: Response) {
        const { id } = request.params;

        const {
            nome,
            valorCompra,
            valorVenda,
            quantidade
        } = request.body;

        const produto = {
            nome,
            valorCompra,
            valorVenda,
            quantidade
        }

        await Knex('produtos')
            .update(produto)
            .where('id', id);

        return response.json(produto)
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params

        await Knex('produtos')
            .delete()
            .where('id', id);

        return response.json({ sucess: true })
    }
};

export default ProdutoController;
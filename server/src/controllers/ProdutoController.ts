import {Response,Request} from 'express';
import Knex from '../database/connection';

class ProdutoController{
    async create(request:Request, response:Response){
        const {
            nome,
            valorCompra,
            valorVenda,
            quantidade
        } = request.body;

        const produtos ={
            nome,
            valorCompra,
            valorVenda,
            quantidade
        };

        await Knex('produtos').insert(produtos);
    
        return response.json({sucess:true})
    }

    async show(request:Request, response:Response){
        const produto = await Knex('produtos').select('*');

        const serializedItems = produto.map(produt =>{
            return{
                id:produt.id,
                nome:produt.nome,
                valorVenda:produt.valorVenda,
                quantidade:produt.quantidade
            };
        });
        return response.json(serializedItems);
    }
};

export default ProdutoController;
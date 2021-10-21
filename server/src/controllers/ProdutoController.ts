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

        const serializedItems = produto.map(produtos =>{
            return{
                id:produtos.id,
                nome:produtos.nome,
                valorVenda:produtos.valorVenda,
                quantidade:produtos.quantidade
            };
        });
        return response.json(serializedItems);
    }
};

export default ProdutoController;
import { Response, Request } from "express";
import Knex from '../database/connection';

class ControlController {
    async update(request: Request, response: Response) {
        const { id } = request.params;
        const { valorBruto, precoVenda } = request.body;

        const somas = {
            valorBruto,
            precoVenda
        }

        await Knex('control').update(somas).where('id', 1)
        return response.json({ sucess: true })
    };
}

export default ControlController;
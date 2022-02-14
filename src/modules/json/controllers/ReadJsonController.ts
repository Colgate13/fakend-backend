import { Response, Request } from 'express';
import JsonReadService from "../services/JsonReadService";

class ReadJsonController {
    public async getAllJson(
        request: Request,
        response: Response): Promise<any> {

        const userUid = request.user.uid;

        const jsonReadService = new JsonReadService();
        const data = await jsonReadService.getAllJson(userUid);


        if (!data) {
            return response.status(200).json({
                error: "Error",
            });
        }

        return response.status(200).json(data);
    }

    public async getJson(
        request: Request,
        response: Response): Promise<any> {

        const { IdUser } = request.params;
        const route = request.path.replace(`/json/${IdUser}`, '');

        //  console.log(`IdUser => ${IdUser}`);
        // console.log(`Route => ${route}`);

        const jsonReadService = new JsonReadService();

        const data = await jsonReadService.getJson(IdUser, route);

        if (!data) {
            return response.status(200).json({
                error: "Error",
            });
        }

        if (data.length === 0) {
            return response.status(200).json({
                message: "Nenhuma rota definida para o path informado",
            });
        }

        if (data.length > 1) {
            return response.status(200).json({
                message: "Multiplas rodas definidas para o path informado",
            });
        }

        return response.status(200).json(data[0]);
    }
}

export default ReadJsonController;
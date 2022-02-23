import { Response, Request } from 'express';
import JsonReadService from "../services/JsonReadService";
import AppError from '../../../errors/AppError';

class ReadJsonController {
    public async getJsonDatas(
        request: Request,
        response: Response): Promise<any> {

        const userUid = request.user.uid;

        const { jsonId } = request.params;

        if (!jsonId) {
            throw new AppError("JsonId is required", 400, 'warn');
        }

        const jsonReadService = new JsonReadService();
        const data = await jsonReadService.getJsonDatas(jsonId, userUid);

        if (!data) {
            throw new AppError("No json found for received data", 404, 'warn');
        }

        return response.status(200).json(data[0]);
    }

    public async getAllJson(
        request: Request,
        response: Response): Promise<any> {

        const userUid = request.user.uid;

        const jsonReadService = new JsonReadService();
        const data = await jsonReadService.getAllJson(userUid);

        if (!data) {
            throw new AppError("No json found for received data", 404, 'warn');
        }

        return response.status(200).json(data);
    }

    public async getJson(
        request: Request,
        response: Response): Promise<any> {

        const { IdUser } = request.params;
        const route = request.path.replace(`/json/${IdUser}`, '');

        const jsonReadService = new JsonReadService();

        const data = await jsonReadService.getJson(IdUser, route);

        if (!data) {
            throw new AppError("No json found for received data", 404, 'warn');
        }

        if (data.length === 0) {
            throw new AppError("Nenhuma rota definida para o path informado", 404, 'warn');
        }

        if (data.length > 1) {
            throw new AppError("Multiplas rotas definidas para o path informado", 418, 'warn');
        }

        return response.status(200).json(data);
    }
}

export default ReadJsonController;
import { Response, Request } from 'express';
import JsonReadService from "../../../services/JsonReadService";
import {
    QueryGetters
} from '../../../../shared/infra/firebase/Query/QueryGetters';


class ReadJsonController {
    public async getJsonDatas(
        request: Request,
        response: Response): Promise<any> {

        const { jsonId } = request.params;

        const jsonReadService = new JsonReadService(new QueryGetters(request.user.uid));
        const data = await jsonReadService.getJsonDatas(jsonId);

        return response.status(200).json(data);
    }

    public async getAllJson(
        request: Request,
        response: Response): Promise<any> {

        const jsonReadService = new JsonReadService(new QueryGetters(request.user.uid));
        const data = await jsonReadService.getAllJson();

        return response.status(200).json(data);
    }

    public async getJson(
        request: Request,
        response: Response): Promise<any> {

        const { IdUser } = request.params;
        const route = request.path;

        const jsonReadService = new JsonReadService(new QueryGetters(IdUser));

        const data = await jsonReadService.getJson(route, IdUser);

        return response.status(200).json(data);
    }
}

export default ReadJsonController;
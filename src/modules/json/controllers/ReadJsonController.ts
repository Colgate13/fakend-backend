import { Response, Request } from 'express';
import JsonReadService from "../services/JsonReadService";

class ReadJsonController {
    public async getAllJson(
        request: Request,
        response: Response): Promise<any> {

        const user = "J4UY0wTa9q5cG2oicXBB";

        const jsonReadService = new JsonReadService();
        const data = await jsonReadService.getAllJson();


        if (!data) {
            return response.status(200).json({
                error: "Error",
            });
        }

        return response.status(200).json(data);

    }
}

export default ReadJsonController;
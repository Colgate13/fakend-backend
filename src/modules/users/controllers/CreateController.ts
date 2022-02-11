import { Response, Request } from 'express';
import CreateService from "../services/CreateService";

class CreateController {
    public async execute(
        request: Request,
        response: Response): Promise<any> {

        const { json, name, route } = request.body;

        if (!json || !name || !route) {
            return response.status(400).json({
                error: "Missing json, name or route"
            });
        }

        const createService = new CreateService();
        const create = await createService.create({
            name,
            route,
            json
        });

        console.log(create)
        if (!create) {
            return response.status(200).json({
                error: "Endpoint created",
                create
            });
        }


        return response.status(200).json({
            message: "Endpoint created",
            create
        });

    }
}

export default CreateController;
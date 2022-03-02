import * as Yup from 'yup';
import AppError from '../../../errors/AppError';
import { Response, Request } from 'express';
import CreateService from "../services/CreateService";

class CreateController {
    public async execute(
        request: Request,
        response: Response): Promise<any> {

        const { json, name, route, method } = request.body;
        const userUid = request.user.uid;

        const schema = Yup.object().shape({
            name: Yup.string().required('Name is required'),
            route: Yup.string().required('Route is required')
        });

        await schema.validate({
            name,
            route
        }, {
            abortEarly: false,
        }).catch((err) => {
            throw new AppError(err.errors[0], 400, 'warn');
        });

        const jsonAux = JSON.stringify(json);

        const createService = new CreateService();
        const create = await createService.create(userUid, {
            name,
            route,
            json: jsonAux,
            method
        });

        if (!create) {
            throw new AppError("Endpoint not created", 400, 'error');
        }

        return response.status(200).json({
            message: "Endpoint created",
            create: create
        });
    }
}

export default CreateController;
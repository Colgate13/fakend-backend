import * as Yup from 'yup';
import AppError from '../../../../../errors/AppError';
import { Response, Request } from 'express';
import CreateService from "../../../services/CreateService";
import { QuerySetters } from '../../../../shared/infra/firebase/Query/QuerySetters';


class CreateController {
    public async execute(
        request: Request,
        response: Response): Promise<any> {

        const { json, name, route, method } = request.body;
        const userUid = request.user.uid;

        const createService = new CreateService(new QuerySetters(userUid));
        const create = await createService.create({
            name,
            route,
            json,
            method
        });

        return response.json(create);
    }
}

export default CreateController;
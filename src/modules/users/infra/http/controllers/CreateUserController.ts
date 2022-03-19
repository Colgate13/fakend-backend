import { Response, Request } from 'express';
import CreateUserService from "../../../services/CreateUserService";
import Auth from '../../../../shared/infra/firebase/Auth/Auth'

class CreateController {
    public async execute(
        request: Request,
        response: Response): Promise<any> {

        const { email, password } = request.body;

        const createUserService = new CreateUserService(new Auth());
        const createUser = await createUserService.createWithMail(
            email, password
        );

        return response.json(createUser);
    }
}

export default CreateController;
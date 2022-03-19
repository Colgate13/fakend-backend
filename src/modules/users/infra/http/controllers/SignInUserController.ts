import { Response, Request } from 'express';
import SignInUserService from "../../../services/SignInUserService";
import Auth from '../../../../shared/infra/firebase/Auth/Auth'

class CreateController {
    public async execute(
        request: Request,
        response: Response): Promise<any> {

        const { email, password } = request.body;

        const signInUserService = new SignInUserService(new Auth());
        const signIn = await signInUserService.create(
            email, password
        );

        return response.json(signIn);
    }
}

export default CreateController;
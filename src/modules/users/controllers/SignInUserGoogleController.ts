import { Response, Request } from 'express';
import AppError from '../../../errors/AppError';
import SignInUserService from "../services/SignInUserService";

class CreateController {
    public async execute(
        request: Request,
        response: Response): Promise<any> {

        const googleUser = <any>request.body;

        if (!googleUser || !googleUser.wc.id_token) {
            throw new AppError("Missing googleUser", 400, 'warn');
        }

        const signInUserService = new SignInUserService();

        const SigIn = await signInUserService.sigInWithCredentials(googleUser);

        if (!SigIn) {
            throw new AppError("Password or email is wrong", 400, 'warn');
        }

        return response.status(200).json({
            message: "User SigIn With Google",
            token: SigIn
        });

    }
}

export default CreateController;
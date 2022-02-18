import { Response, Request } from 'express';
import SignInUserService from "../services/SignInUserService";

class CreateController {
    public async execute(
        request: Request,
        response: Response): Promise<any> {

        const googleUser = <any>request.body;

        if (!googleUser || !googleUser.wc.id_token) {
            return response.status(400).json({
                error: "Missing googleUser"
            });
        }

        const signInUserService = new SignInUserService();

        const createUser = await signInUserService.sigInWithCredentials(googleUser);

        if (!createUser) {
            return response.status(200).json({
                error: "User not created",
                createUser
            });
        }

        return response.status(200).json({
            message: "User SigIn With Google",
            createUser
        });

    }
}

export default CreateController;
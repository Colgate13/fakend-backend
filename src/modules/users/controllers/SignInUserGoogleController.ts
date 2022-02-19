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

        const SigIn = await signInUserService.sigInWithCredentials(googleUser);

        if (!SigIn) {
            return response.status(200).json({
                error: "User not created",
                SigIn
            });
        }

        return response.status(200).json({
            message: "User SigIn With Google",
            token: SigIn
        });

    }
}

export default CreateController;
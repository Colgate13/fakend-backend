import { Response, Request } from 'express';
import SignInUserService from "../services/SignInUserService";

class CreateController {
    public async execute(
        request: Request,
        response: Response): Promise<any> {

        const { email, password } = request.body;

        if (!email || !password) {
            return response.status(400).json({
                error: "Missing email or password"
            });
        }

        const signInUserService = new SignInUserService();
        const signIn = await signInUserService.create(
            email, password
        );

        // console.log(signIn)

        if (!signIn) {
            return response.status(200).json({
                error: "Password or email is wrong",
                signIn
            });
        }

        const { user } = signIn;

        return response.status(200).json({
            message: "Sing in successfully",
            email: user.email,
            uid: user.uid,
            token: user.accessToken
        });

    }
}

export default CreateController;
import * as Yup from 'yup';
import AppError from '../../../errors/AppError';
import { Response, Request } from 'express';
import SignInUserService from "../services/SignInUserService";

class CreateController {
    public async execute(
        request: Request,
        response: Response): Promise<any> {

        const { email, password } = request.body;

        const schema = Yup.object().shape({
            email: Yup.string().required('E-mail is required').email('Invalid email'),
            password: Yup.string().required('Password is required')
        });

        await schema.validate({
            email,
            password
        }, {
            abortEarly: false,
        }).catch((err) => {
            throw new AppError(err.errors[0], 400, 'warn');
        });

        const signInUserService = new SignInUserService();
        const signIn = await signInUserService.create(
            email, password
        );

        if (!signIn) {
            throw new AppError("Password or email is wrong", 400, 'warn');
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
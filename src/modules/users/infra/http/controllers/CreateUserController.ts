import * as Yup from 'yup';
import AppError from '../../../../../errors/AppError';
import { Response, Request } from 'express';
import CreateUserService from "../../../services/CreateUserService";

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

        const createUserService = new CreateUserService();
        const createUser = await createUserService.createWithMail(
            email, password
        );

        if (!createUser) {
            throw new AppError("User not created", 400, 'error');
        }

        return response.status(200).json({
            message: "User created",
            create: createUser.id
        });
    }
}

export default CreateController;
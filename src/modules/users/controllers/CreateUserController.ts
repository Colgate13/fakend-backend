import { Response, Request } from 'express';
import CreateUserService from "../services/CreateUserService";

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

        const createUserService = new CreateUserService();
        const createUser = await createUserService.create(
            email, password
        );

        //console.log(createUser)

        if (!createUser) {
            return response.status(200).json({
                error: "User not created",
                createUser
            });
        }


        return response.status(200).json({
            message: "User created",
            create: createUser.id
        });

    }
}

export default CreateController;
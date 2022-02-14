import { Router } from 'express';

const routes = Router();

import CreateUserController from '../../controllers/CreateUserController';
import SignInUserController from '../../controllers/SignInUserController';

const createUserController = new CreateUserController();
const signInUserController = new SignInUserController();

routes.post('/user/create', createUserController.execute);

routes.post('/user/signin', signInUserController.execute);

routes.get("/user", (req, res) => {
    // console.log(`Server > Acess in ${req.originalUrl}-${req.method} STATUS: ${res.statusCode}`);
    res.send({
        message: "Users routes"
    })
});

export default routes;
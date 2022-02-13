import { Router } from 'express';

const routes = Router();

import CreateUserController from '../../controllers/CreateUserController';

const createUserController = new CreateUserController();

routes.post('/user/create', createUserController.execute);

routes.get("/user", (req, res) => {
    console.log(`Server > Acess in ${req.originalUrl}-${req.method} STATUS: ${res.statusCode}`);
    res.send({
        message: "Users routes"
    })
});

export default routes;
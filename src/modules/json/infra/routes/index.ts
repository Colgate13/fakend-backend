import { Router } from 'express';

const routes = Router();

import CreateController from '../../controllers/CreateController';
import ReadJsonController from '../../controllers/ReadJsonController';

const createController = new CreateController();
const readJsonController = new ReadJsonController();

routes.post('/json/create', createController.execute);

routes.get("/json/list", readJsonController.getAllJson);

routes.all("/json/:IdUser/*", readJsonController.getJson);

routes.get("/json", (req, res) => {
    console.log(`Server > Acess in ${req.originalUrl}-${req.method} STATUS: ${res.statusCode}`);
    res.send({
        message: "Users routes"
    })
});

export default routes;
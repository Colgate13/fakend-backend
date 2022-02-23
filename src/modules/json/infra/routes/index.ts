import { Router } from 'express';

const routes = Router();

import CreateController from '../../controllers/CreateController';
import ReadJsonController from '../../controllers/ReadJsonController';
import middlewares from "../../../shared/infra/http/middlewares/index";

const createController = new CreateController();
const readJsonController = new ReadJsonController();

routes.post('/json/create', middlewares, createController.execute);
routes.get('/json/get/:jsonId', middlewares, readJsonController.getJsonDatas);

routes.get("/json/list", middlewares, readJsonController.getAllJson);
routes.get("/json", middlewares, readJsonController.getAllJson);

routes.all("/json/:IdUser/*", readJsonController.getJson);

routes.get("/json", (req, res) => {
    // console.log(`Server > Acess in ${req.originalUrl}-${req.method} STATUS: ${res.statusCode}`);
    res.send({
        message: "json routes"
    })
});

export default routes;
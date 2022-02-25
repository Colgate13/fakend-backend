import { Router } from 'express';

const routes = Router();

import CreateController from '../../controllers/CreateController';
import ReadJsonController from '../../controllers/ReadJsonController';
import EditJsonController from '../../controllers/EditJsonController';

import middlewares from "../../../shared/infra/http/middlewares/index";

const createController = new CreateController();
const readJsonController = new ReadJsonController();
const editJsonController = new EditJsonController();

routes.post('/json/create', middlewares, createController.execute);
routes.get('/json/get/:jsonId', middlewares, readJsonController.getJsonDatas);

routes.get('/json/edit/:jsonId', middlewares, editJsonController.editJson);

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
import {
    Router
} from "express";
import 'express-async-errors';
import path from 'path';

import GlobalErrorHandler from '../middlewares/GlobalErrorHandler';

import JsonRoutes from '../../../../json/infra/routes/index'
import UserRoutes from '../../../../users/infra/routes/index'

export const routesCreator = Router();

const routes = Router();

routes.use(JsonRoutes);
routes.use(UserRoutes);

// sendFile will go here
routes.get('/home', function (req, res) {
    res.sendFile(path.join(__dirname, '../../../../../../web/index.html'));
});

routes.use("/", (req, res) => {
    // console.log(`Server > Acess in ${req.originalUrl} - ${req.method} STATUS: ${res.statusCode}`);
    res.send({
        message: "All routes are working"
    })
});

routes.use(GlobalErrorHandler);

export default routes;
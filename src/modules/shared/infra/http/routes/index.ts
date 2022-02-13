import {
    Router
} from "express";
import JsonRoutes from '../../../../json/infra/routes/index'
import UserRoutes from '../../../../users/infra/routes/index'

export const routesCreator = Router();

const routes = Router();

routes.use(JsonRoutes);
routes.use(UserRoutes);

routes.use("/", (req, res) => {
    console.log(`Server > Acess in ${req.originalUrl} - ${req.method} STATUS: ${res.statusCode}`);
    res.send({
        message: "All routes are working"
    })
});

export default routes;
import {
    Router
} from "express";
import UsersRoutes from '../../../../users/infra/routes/index'

export const routesCreator = Router();

const routes = Router();

routes.use(UsersRoutes);

routes.use("/", (req, res) => {
    console.log(`Server > Acess in ${req.originalUrl} - ${req.method} STATUS: ${res.statusCode}`);
    res.send({
        message: "Hello World"
    })
});


export default routes;
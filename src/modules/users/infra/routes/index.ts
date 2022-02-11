import { Router } from 'express';
import { addDoc, collection } from 'firebase/firestore';
import db from '../../../shared/infra/database/index';

const routes = Router();
import CreateController from '../../controllers/CreateController';


const createController = new CreateController();

routes.post('/users/create/json', createController.execute);

routes.post("/users/create/json/teste", async (request, response) => {
    const { json, name, route } = request.body;
    const usersId = "J12KsNaDNeytXxeimQeW"

    if (!json || !name || !route) {
        return response.status(400).json({
            error: "Missing json, name or route"
        });
    }

    try {
        const docRef = await addDoc(collection(db, `users/${usersId}/json`), {
            name: name,
            route: route,
            json: json
        });

        return response.status(200).json({
            message: "Endpoint created",
            id: docRef.id,
            data: {
                name: name,
                route: route,
                json: json
            }
        });
    } catch (e) {
        return response.status(200).json({
            message: "Endpoint created"
        });
    }

});


routes.get("/users", (req, res) => {
    console.log(`Server > Acess in ${req.originalUrl}-${req.method} STATUS: ${res.statusCode}`);
    res.send({
        message: "Users routes"
    })
});

// routes.get("/users/:id/:jsonId", (req, res) => {
//     console.log(`Server > Acess in ${req.originalUrl}-${req.method} STATUS: ${res.statusCode}`);
//     const { id, jsonId } = req.params;

//     switch (jsonId) {
//         case "1":
//             res.send(json1);
//             break;
//         case "2":
//             res.send(json2);
//             break;
//         default:
//             res.send({
//                 message: "Not found",
//                 id,
//                 jsonId
//             })
//     }
//     if (jsonId === "1") {
//         res.send(json1);
//     }
// });

export default routes;
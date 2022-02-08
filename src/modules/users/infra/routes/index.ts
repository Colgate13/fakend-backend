import { Router } from 'express';

const routes = Router();


const json1 = {
    "name": "John",
    "age": 30,
    "cars": [
        "Ford",
        "BMW",
        "Fiat"
    ]
};

const json2 = {
    "name": "Carlos",
    "age": 40,
    "cars": [
        "BMW",
        "Mercedes",
        "Fusca"
    ]
};


routes.get("/users", (req, res) => {
    console.log(`Server > Acess in ${req.originalUrl}-${req.method} STATUS: ${res.statusCode}`);
    res.send({
        message: "Users routes"
    })
});

routes.get("/users/:id/:jsonId", (req, res) => {
    console.log(`Server > Acess in ${req.originalUrl}-${req.method} STATUS: ${res.statusCode}`);
    const { id, jsonId } = req.params;

    switch (jsonId) {
        case "1":
            res.send(json1);
            break;
        case "2":
            res.send(json2);
            break;
        default:
            res.send({
                message: "Not found",
                id,
                jsonId
            })
    }
    if (jsonId === "1") {
        res.send(json1);
    }
});

export default routes;
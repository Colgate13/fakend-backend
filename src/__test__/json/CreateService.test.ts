import { Response, Request } from 'express';
import { QuerySetterns } from './mock/QuerySetterns'
import CreateService from '../../modules/json/services/CreateService'

describe('Create endpoint', () => {
    it('should be able to create a new endpoint - Check Keys exist', async () => {

        const request = {
            body: {
                name: 'Create Test name',
                route: '/users',
                json: {
                    name: "Create Test",
                    test: "20",
                    cidade: "São Paulo",
                    estado: {
                        nome: "São Paulo",
                        sigla: "SP"
                    }
                },
                method: "GET"
            }
        } as Request;

        const json = {
            id: "75a5d2f7-839e-4777-ad57-810f50113e26",
            name: "Create Test name",
            route: "/users",
            json: "{\"name\":\"Create Test\",\"test\":\"20\",\"cidade\":\"São Paulo\",\"estado\":{\"nome\":\"São Paulo\",\"sigla\":\"SP\"}}",
            method: "GET"
        }

        const createService = new CreateService(new QuerySetterns('USER_ID'))

        const createJson = await createService.create({
            name: request.body.name,
            route: request.body.route,
            json: request.body.json,
            method: request.body.method
        })

        json.id = createJson.id;

        expect(createJson).toEqual(json);
    });

});
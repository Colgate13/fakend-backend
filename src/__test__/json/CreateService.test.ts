import { Response, Request } from 'express';
import { QuerySetters, QuerySettersNullReturn } from './mock/QuerySetters'
import CreateService from '../../modules/json/services/CreateService'
import AppError from '../../errors/AppError'

describe('Create endpoint', () => {
    it('Deve ser capaz de criar um endpoint', async () => {

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

        const createService = new CreateService(new QuerySetters('USER_ID'))

        const createJson = await createService.create({
            name: request.body.name,
            route: request.body.route,
            json: request.body.json,
            method: request.body.method
        })

        json.id = createJson.id;

        expect(createJson).toEqual(json);
    });

    it('Deve ser capaz de não criar um endpoint, pois o Query ira retornar undefined', async () => {

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

        const createService = new CreateService(new QuerySettersNullReturn('USER_ID'))

        await createService.create({
            name: request.body.name,
            route: request.body.route,
            json: request.body.json,
            method: request.body.method
        }).catch((err) => {
            expect(err).toBeInstanceOf(AppError);

            const messageExpect = 'Error create json'
            const statusCodeExpect = 500;
            const type = 'error';

            const errorExpect = {
                message: messageExpect,
                statusCode: statusCodeExpect,
                type: type
            }

            expect(err).toEqual(errorExpect);
        })
    });

    it('Deve ser capaz de não criar um endpoint, pois, name esta undefined', async () => {

        const request = {
            body: {
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

        const createService = new CreateService(new QuerySetters('USER_ID'))


        await createService.create({
            name: request.body.name,
            route: request.body.route,
            json: request.body.json,
            method: request.body.method
        }).catch((err) => {
            expect(err).toBeInstanceOf(AppError);

            const messageExpect = 'name is a required field'
            const statusCodeExpect = 400;
            const type = 'warn';

            const errorExpect = {
                message: messageExpect,
                statusCode: statusCodeExpect,
                type: type
            }

            expect(err).toEqual(errorExpect);
        })

    });


    it('Deve ser capaz de não criar um endpoint, pois, method esta undefined', async () => {

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
            }
        } as Request;

        const createService = new CreateService(new QuerySetters('USER_ID'))


        await createService.create({
            name: request.body.name,
            route: request.body.route,
            json: request.body.json,
            method: request.body.method
        }).catch((err) => {
            expect(err).toBeInstanceOf(AppError);

            const messageExpect = 'method is a required field'
            const statusCodeExpect = 400;
            const type = 'warn';

            const errorExpect = {
                message: messageExpect,
                statusCode: statusCodeExpect,
                type: type
            }

            expect(err).toEqual(errorExpect);
        })

    });

    it('Deve ser capaz de não criar um endpoint, pois, json esta undefined', async () => {

        const request = {
            body: {
                name: 'Create Test name',
                route: '/users',
                method: "GET"
            }
        } as Request;

        const createService = new CreateService(new QuerySetters('USER_ID'))

        await createService.create({
            name: request.body.name,
            route: request.body.route,
            json: request.body.json,
            method: request.body.method
        }).catch((err) => {
            expect(err).toBeInstanceOf(AppError);

            const messageExpect = 'json is a required field'
            const statusCodeExpect = 400;
            const type = 'warn';

            const errorExpect = {
                message: messageExpect,
                statusCode: statusCodeExpect,
                type: type
            }

            expect(err).toEqual(errorExpect);
        })

    });

    it('Deve ser capaz de não criar um endpoint, pois, route esta undefined', async () => {

        const request = {
            body: {
                name: 'Create Test name',
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

        const createService = new CreateService(new QuerySetters('USER_ID'))


        await createService.create({
            name: request.body.name,
            route: request.body.route,
            json: request.body.json,
            method: request.body.method
        }).catch((err) => {
            expect(err).toBeInstanceOf(AppError);

            const messageExpect = 'route is a required field'
            const statusCodeExpect = 400;
            const type = 'warn';

            const errorExpect = {
                message: messageExpect,
                statusCode: statusCodeExpect,
                type: type
            }

            expect(err).toEqual(errorExpect);
        })

    });
});
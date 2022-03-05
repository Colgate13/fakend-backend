import { Response, Request } from 'express';
import { QuerySetterns, QuerySetternsNullReturn } from './mock/QuerySetterns'
import CreateService from '../../modules/json/services/CreateService'
import AppError from '../../errors/AppError'

describe('Create endpoint', () => {
    it('should be able to create a new endpoint', async () => {

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

    it('should be able to dont create, Query return undefined', async () => {

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

        const createService = new CreateService(new QuerySetternsNullReturn('USER_ID'))

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

    it('should be able to dont create, TRY undefined name', async () => {

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

        const createService = new CreateService(new QuerySetterns('USER_ID'))


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


    it('should be able to dont create, TRY undefined method', async () => {

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

        const createService = new CreateService(new QuerySetterns('USER_ID'))


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

    it('should be able to dont create, TRY undefined json', async () => {

        const request = {
            body: {
                name: 'Create Test name',
                route: '/users',
                method: "GET"
            }
        } as Request;

        const createService = new CreateService(new QuerySetterns('USER_ID'))

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

    it('should be able to dont create, TRY undefined route', async () => {

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

        const createService = new CreateService(new QuerySetterns('USER_ID'))


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
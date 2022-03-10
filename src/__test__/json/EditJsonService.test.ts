import { Response, Request } from 'express';
import { QuerySetterns } from './mock/QuerySetterns'
import EditJsonService from '../../modules/json/services/EditJsonService'
import AppError from '../../errors/AppError'

describe('Edit endpoint', () => {
    it("should be able to edit a exist endpoint. Editing method", async () => {

        const jsonExpect = {
            type: 'success',
            message: 'Json edited with success',
            id: '75a5d2f7-839e-4777-ad57-810f50113e26',
            changes: {
                method: 'GET',
            }
        }

        const editJsonService = new EditJsonService(new QuerySetterns('USER_ID'));

        const editJson = await editJsonService.EditJsonDatas('75a5d2f7-839e-4777-ad57-810f50113e26', {
            method: 'GET',
        });

        expect(editJson).toEqual(jsonExpect);

    });

    it("should be able to edit a exist endpoint. Editing route", async () => {

        const jsonExpect = {
            type: 'success',
            message: 'Json edited with success',
            id: '75a5d2f7-839e-4777-ad57-810f50113e26',
            changes: {
                route: '/users',
            }
        }

        const editJsonService = new EditJsonService(new QuerySetterns('USER_ID'));

        const editJson = await editJsonService.EditJsonDatas('75a5d2f7-839e-4777-ad57-810f50113e26', {
            route: '/users',
        });

        expect(editJson).toEqual(jsonExpect);


    });

    it("should be able to edit a exist endpoint. Editing name", async () => {

        const jsonExpect = {
            type: 'success',
            message: 'Json edited with success',
            id: '75a5d2f7-839e-4777-ad57-810f50113e26',
            changes: {
                name: 'hehe',
            }
        }

        const editJsonService = new EditJsonService(new QuerySetterns('USER_ID'));

        const editJson = await editJsonService.EditJsonDatas('75a5d2f7-839e-4777-ad57-810f50113e26', {
            name: 'hehe',
        });

        expect(editJson).toEqual(jsonExpect);


    });

    it("should be able to edit a exist endpoint. Editing json", async () => {

        const jsonExpect = {
            type: 'success',
            message: 'Json edited with success',
            id: '75a5d2f7-839e-4777-ad57-810f50113e26',
            changes: {
                json: {
                    top: 'tio'
                },
            }
        }

        const editJsonService = new EditJsonService(new QuerySetterns('USER_ID'));

        const editJson = await editJsonService.EditJsonDatas('75a5d2f7-839e-4777-ad57-810f50113e26', {
            json: {
                top: 'tio'
            },
        });

        expect(editJson).toEqual(jsonExpect);


    });

    it("try edit JSON but without passing none data", async () => {

        const jsonExpect = {
            type: 'success',
            message: 'Json edited with success',
            id: '75a5d2f7-839e-4777-ad57-810f50113e26',
            changes: {
                json: {},
            }
        }

        const editJsonService = new EditJsonService(new QuerySetterns('USER_ID'));

        const editJson = await editJsonService.EditJsonDatas('75a5d2f7-839e-4777-ad57-810f50113e26', {
            json: {},
        });

        expect(editJson).toEqual(jsonExpect);


    });
});

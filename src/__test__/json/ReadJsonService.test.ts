import { Response, Request } from 'express';
import { QueryGetters } from './mock/QueryGetters'
import JsonReadService from '../../modules/json/services/JsonReadService'
import AppError from '../../errors/AppError'

describe('ReadJson', () => {
    it("should be able to read json", async () => {

        const jsonExpect = {
            "nome": "{! base64 'MD5', 'normal', '' !}",
            "idade": "20",
            "cidade": "São Paulo",
            "estado": {
                "nome": "São Paulo",
                "sigla": "SP"
            },
            "pais": {
                "nome": "{! base64 'encode', 'normal', '' !}",
                "sigla": "BR"
            }
        }

        const readJson = new JsonReadService(new QueryGetters('USER_ID'));

        const json = await readJson.getJson('/123', 'USER_ID');

        expect(json).toEqual(jsonExpect);

    });

});

describe('get all json', () => {
    it("should be able to get all jsons", async () => {

        const jsonExpect = [
            {
                "doc": "5a9f3e4b-f1d9-4198-816c-a2babc6fb98f",
                "id": "5a9f3e4b-f1d9-4198-816c-a2babc6fb98f",
                "name": "{! base64 'encode', 'normal', '' !}",
                "route": "asd",
                "json": "{\"nome\":\"{! base64 'MD5', 'normal', '' !}\",\"idade\":\"20\",\"cidade\":\"São Paulo\",\"estado\":{\"nome\":\"São Paulo\",\"sigla\":\"SP\"},\"pais\":{\"nome\":\"{! base64 'encode', 'normal', '' !}\",\"sigla\":\"BR\"}}"
            },
            {
                "doc": "644f6bf6-ef87-4b74-8100-d3dbf2432949",
                "id": "644f6bf6-ef87-4b74-8100-d3dbf2432949",
                "name": "{! base64 'encode', 'normal', '' !}",
                "route": "/31",
                "json": "{\"nome\":\"{! base64 'MD5', 'normal', '' !}\",\"idade\":\"20\",\"cidade\":\"São Paulo\",\"estado\":{\"nome\":\"São Paulo\",\"sigla\":\"SP\"},\"pais\":{\"nome\":\"{! base64 'encode', 'normal', '' !}\",\"sigla\":\"BR\"}}"
            },
            {
                "doc": "672c234a-8e85-4e40-a447-cc1fc9963907",
                "id": "672c234a-8e85-4e40-a447-cc1fc9963907",
                "name": "{! base64 'encode', 'normal', '' !}",
                "route": "/123",
                "json": "{\"nome\":\"{! base64 'MD5', 'normal', '' !}\",\"idade\":\"20\",\"cidade\":\"São Paulo\",\"estado\":{\"nome\":\"São Paulo\",\"sigla\":\"SP\"},\"pais\":{\"nome\":\"{! base64 'encode', 'normal', '' !}\",\"sigla\":\"BR\"}}"
            }
        ]

        const readJson = new JsonReadService(new QueryGetters('USER_ID'));

        const json = await readJson.alljsonData();

        expect(json).toEqual(jsonExpect);

    });

});

describe('json Data', () => {
    it("should be able to json Data", async () => {

        const jsonExpect = {
            "doc": "672c234a-8e85-4e40-a447-cc1fc9963907",
            "id": "672c234a-8e85-4e40-a447-cc1fc9963907",
            "name": "{! base64 'encode', 'normal', '' !}",
            "route": "/123",
            "json": "{\"nome\":\"{! base64 'MD5', 'normal', '' !}\",\"idade\":\"20\",\"cidade\":\"São Paulo\",\"estado\":{\"nome\":\"São Paulo\",\"sigla\":\"SP\"},\"pais\":{\"nome\":\"{! base64 'encode', 'normal', '' !}\",\"sigla\":\"BR\"}}"
        }


        const readJson = new JsonReadService(new QueryGetters('USER_ID'));

        const json = await readJson.jsonData('75a5d2f7-839e-4777-ad57-810f50113e26');

        expect(json).toEqual(jsonExpect);

    });

});
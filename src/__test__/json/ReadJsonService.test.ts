import { Response, Request } from 'express';
import { QueryGetters } from './mock/QueryGetters'
import JsonReadService from '../../modules/json/services/JsonReadService'
import AppError from '../../errors/AppError'

describe('Edit endpoint', () => {
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

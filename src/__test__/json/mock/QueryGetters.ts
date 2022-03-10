import AppError from '../../../errors/AppError';
import { ICreateJson, ICreateUser, IEditJson } from '../../../modules/shared/infra/firebase/Query/interfaces/Ijson'

/**
 * @interface IQueryGetters
 * @desc Responsável por setar informações sobre jsons
 **/

export interface IQueryGetters {
    getUser(): Promise<any>
    getAllJsons(): Promise<any>
    getJsonData(id: string): Promise<any>
    getJson(route: string): Promise<any>
}


export class QueryGetters implements IQueryGetters {

    private userId: string;

    constructor(userId: string) {
        this.userId = userId;
    }

    public async getUser(): Promise<any> {

        const user = {
            id: '75a5d2f7-839e-4777-ad57-810f50113e26',
            name: 'Teste',
            email: 'teste@gmail.com',

        }

        return user;
    }

    public async getAllJsons(): Promise<any> {

        const jsons = [
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



        return jsons;
    }

    public async getJsonData(id: string): Promise<any> {


        const jsonList = [
            '75a5d2f7-839e-4777-ad57-810f50113e26',
        ]



        if (jsonList.includes(id)) {
            return {
                "doc": "672c234a-8e85-4e40-a447-cc1fc9963907",
                "id": "672c234a-8e85-4e40-a447-cc1fc9963907",
                "name": "{! base64 'encode', 'normal', '' !}",
                "route": "/123",
                "json": "{\"nome\":\"{! base64 'MD5', 'normal', '' !}\",\"idade\":\"20\",\"cidade\":\"São Paulo\",\"estado\":{\"nome\":\"São Paulo\",\"sigla\":\"SP\"},\"pais\":{\"nome\":\"{! base64 'encode', 'normal', '' !}\",\"sigla\":\"BR\"}}"
            };
        }

        throw new AppError('Json not found', 400);
    }

    public async getJson(route: string): Promise<any> {

        const obj = [{
            data: function () {
                return {
                    "doc": "672c234a-8e85-4e40-a447-cc1fc9963907",
                    "id": "672c234a-8e85-4e40-a447-cc1fc9963907",
                    "name": "{! base64 'encode', 'normal', '' !}",
                    "route": "/123",
                    "json": "{\"nome\":\"{! base64 'MD5', 'normal', '' !}\",\"idade\":\"20\",\"cidade\":\"São Paulo\",\"estado\":{\"nome\":\"São Paulo\",\"sigla\":\"SP\"},\"pais\":{\"nome\":\"{! base64 'encode', 'normal', '' !}\",\"sigla\":\"BR\"}}"
                };
            }
        }]

        if (route === '/123') {
            return obj
        }
        throw new AppError('Json not found', 400);
    }
}

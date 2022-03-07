import AppError from '../../../errors/AppError';
import { ICreateJson, ICreateUser, IEditJson } from '../../../modules/shared/infra/firebase/Query/interfaces/Ijson'

/**
 * @interface IQuerySetterns
 * @desc Responsável por setar informações sobre jsons
 **/

export interface IQuerySetterns {
    createUser(user: ICreateUser): Promise<any>
    createJson(jsonId: string, { name, json, route, method }: ICreateJson): Promise<any>
    editJson(jsonId: string, data: IEditJson): Promise<any>
}


export class QuerySetterns implements IQuerySetterns {

    private userId: string;

    constructor(userId: string) {
        this.userId = userId;
    }

    public async createUser(user: ICreateUser): Promise<any> {
        return user;
    }

    public async createJson(jsonId: string, {
        name, json, route, method
    }: ICreateJson): Promise<any> {

        return {
            id: '75a5d2f7-839e-4777-ad57-810f50113e26',
            name: name,
            route: route,
            json: json,
            method: method
        };
    }

    public async editJson(jsonId: string, data: IEditJson): Promise<any> {

        return {
            jsonId, data
        };
    }
}

export class QuerySetternsNullReturn implements IQuerySetterns {

    private userId: string;

    constructor(userId: string) {
        this.userId = userId;
    }

    public async createUser(user: ICreateUser): Promise<any> {
        return user;
    }

    public async createJson(jsonId: string, {
        name, json, route, method
    }: ICreateJson): Promise<any> {

        return undefined;
    }

    public async editJson(jsonId: string, data: IEditJson): Promise<any> {


        const jsonList = [
            '75a5d2f7-839e-4777-ad57-810f50113e26',
            '75a5d2f7-839e-4777-ad57-810f50113e27',
            '75a5d2f7-839e-4777-ad57-810f50113e28',
        ]

        if (jsonList.includes(jsonId)) {
            return data;
        }

        throw new AppError('Json not found', 400);
    }
}
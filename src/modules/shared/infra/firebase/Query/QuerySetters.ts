import Query from './Query';
import { ICreateJson, ICreateUser, IEditJson } from './interfaces/Ijson'

/**
 * @interface IQuerySetters
 * @desc Responsável por setar informações sobre jsons
 **/

export interface IQuerySetters {
    createUser(user: ICreateUser): Promise<any>
    createJson(jsonId: string, { name, json, route, method }: ICreateJson): Promise<any>
    editJson(jsonId: string, data: IEditJson): Promise<any>
}


export class QuerySetters extends Query implements IQuerySetters {

    constructor(userId: string) {
        super(userId);
    }

    public async createUser(user: ICreateUser): Promise<any> {
        return await this.CREATEUser(user);
    }

    public async createJson(jsonId: string, {
        name, json, route, method
    }: ICreateJson): Promise<any> {

        return await this.CREATEJson(jsonId, {
            name, json, route, method
        });
    }

    public async editJson(jsonId: string, data: IEditJson): Promise<any> {

        return await this.EDITJson(jsonId, data);
    }
}
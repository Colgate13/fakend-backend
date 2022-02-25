import Query from './Query';
import { ICreateJson, ICreateUser, IEditJson } from './interfaces/Ijson'


export default class QueryGetterns extends Query {

    constructor(userId: string) {
        super(userId);
    }

    public async createUser(user: ICreateUser): Promise<any> {
        return await this.CREATEUser(user);
    }

    public async createJson(jsonId: string, {
        name, json, route, method
    }: ICreateJson): Promise<any> {

        console.log({ jsonId, name, json, route, method })

        return await this.CREATEJson(jsonId, {
            name, json, route, method
        });
    }

    public async editJson(jsonId: string, data: IEditJson): Promise<any> {

        return await this.EDITJson(jsonId, data);
    }
}
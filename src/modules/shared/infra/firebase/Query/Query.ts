import QuerysManager from './QuerysManager';
import { ICreateJson, ICreateUser } from './interfaces/Ijson'

/**
 * @class Query
 * @author Gabriel Barros Feitosa Sá - github.com/Colgate13
 * @description Please, dont use this class directly, use the QueryGetters or QuerySetters instead.
 *
 */

export default class Query extends QuerysManager {

    constructor(userId: string) {
        super(userId);
    }

    public async getUser(): Promise<any> {
        return await this.GETUser();
    }

    public async getAllJsons(): Promise<any> {
        return await this.GETallJsons();
    }

    public async getJsonData(id: string): Promise<any> {
        return await this.GETJsonData(id);
    }

    public async getJson(route: string): Promise<any> {
        return await this.GETJson(route);
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

}
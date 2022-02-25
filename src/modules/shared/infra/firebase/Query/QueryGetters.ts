import Query from './Query';

export default class QueryGetters extends Query {

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
}
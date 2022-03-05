import Query from './Query';

/**
 * @interface IQueryGetters
 * @desc Responsável por trazer informações sobre jsons
 **/

export interface IQueryGetters {
    getUser(): Promise<any>
    getAllJsons(): Promise<any>
    getJsonData(id: string): Promise<any>
    getJson(route: string): Promise<any>
}


export class QueryGetters extends Query implements IQueryGetters {

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
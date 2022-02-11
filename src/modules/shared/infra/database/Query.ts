import db from './index';
import { collection, getDocs, getDoc, addDoc } from "firebase/firestore";

export interface ICreateJson {
    name: string;
    route: string;
    json: object;
}

export default class Query {
    protected userId: string;

    constructor(userId: string) {
        this.userId = userId;
    }

    protected async GETUser(): Promise<any> {
        const userQuery = collection(db, `users/${this.userId}`);
        return await getDocs(userQuery);
    }

    protected async GETJson(jsonId: string): Promise<any> {
        const jsonQuery = collection(db, `users/${this.userId}/${jsonId}`);
        return await getDocs(jsonQuery);
    }

    protected async CreateJson(jsonId: string, {
        name, json, route
    }: ICreateJson): Promise<any> {
        return await addDoc(collection(db, `users/${this.userId}/json`), {
            id: jsonId,
            name: name,
            route: route,
            json: json
        });
    }


    public async getUser(): Promise<any> {
        return await this.GETUser();
    }

    public async getJson(jsonId: string): Promise<any> {
        return await this.GETJson(jsonId);
    }

    public async createJson(jsonId: string, {
        name, json, route
    }: ICreateJson): Promise<any> {
        return await this.CreateJson(jsonId, {
            name, json, route
        });
    }

}
import { db } from '../index';
import { collection, getDocs, getDoc, addDoc, query, where } from "firebase/firestore";

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

    protected async GETallJsons(): Promise<any> {
        const jsonQuery = query(
            collection(db, `users/${this.userId}/json`)
        );

        return (await getDocs(jsonQuery)).docs;
    }

    protected async GETJson(route: string): Promise<any> {
        const jsonQuery = query(
            collection(db, `users/${this.userId}/json`),
            where('route', '==', route)
        );

        return (await getDocs(jsonQuery)).docs;
    }

    protected async CREATEJson(jsonId: string, {
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

    public async getAllJsons(): Promise<any> {
        return await this.GETallJsons();
    }

    public async getJson(route: string): Promise<any> {
        return await this.GETJson(route);
    }

    public async createJson(jsonId: string, {
        name, json, route
    }: ICreateJson): Promise<any> {
        return await this.CREATEJson(jsonId, {
            name, json, route
        });
    }

}
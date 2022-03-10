import { db } from '../index';
import { collection, getDocs, updateDoc, getDoc, query, where, doc, setDoc } from "firebase/firestore";

export interface ICreateUser {
    id?: string;
    email: string;
    name?: string;
    ProfileImage?: string;
}

export interface ICreateJson {
    name: string;
    route: string;
    json: any;
    method?: string;
}

export interface IEditJson {
    [key: string]: any;
}

export default class QuerysManager {
    protected userId: string;

    constructor(userId: string) {
        this.userId = userId;
    }

    protected async CREATEUser({ name, email, ProfileImage }: ICreateUser): Promise<any> {
        const user = doc(db, 'users', this.userId);

        const userName = name !== undefined ? name : this.userId;

        const userData = {
            uid: this.userId,
            name: userName,
            email,
        }

        return await setDoc(user, userData);
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

    protected async GETJsonData(id: string): Promise<any> {

        const json = await getDoc(
            doc(
                db,
                "users",
                this.userId,
                "json",
                id
            )
        );

        return await json.data()
    }

    protected async GETJson(route: string): Promise<any> {

        const jsonQuery = query(
            collection(db, `users/${this.userId}/json`),
            where('route', '==', route)
        );

        return (await getDocs(jsonQuery)).docs;
    }

    protected async CREATEJson(jsonId: string, {
        name, json, route, method
    }: ICreateJson): Promise<any> {

        const docJson = doc(db, `users/${this.userId}/json/${jsonId}`);

        return await setDoc(docJson, {
            id: jsonId,
            name: name,
            route: route,
            json: json,
            method: method
        }).catch((err) => {
            console.log("Json dont created, error code: 8888", err);
        }).then(async () => {

            const docRef = doc(db, "users", this.userId, "json", jsonId);
            const docSnap = await getDoc(docRef)

            return docSnap.data(); // return json data
        })
    }

    protected async EDITJson(jsonId: string, data: IEditJson): Promise<any> {

        return await updateDoc(doc(db, `users/${this.userId}/json/${jsonId}`), data);
    }
}
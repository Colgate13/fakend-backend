import { auth } from '../index';
import { createUserWithEmailAndPassword } from "firebase/auth";


export interface ICreateUser {
    email: string;
    password: string;
}

export default class Auth {

    public async createUserWithMail(email: string, password: string): Promise<any> {
        return await createUserWithEmailAndPassword(auth, email, password);
    }

}
import { auth, adminAuth } from '../index';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export interface ICreateUser {
    email: string;
    password: string;
}

export default class Auth {

    public async createUserWithMail(email: string, password: string): Promise<any> {
        return await createUserWithEmailAndPassword(auth, email, password);
    }

    public async signInEmailAndPassword(email: string, password: string): Promise<any> {
        return await signInWithEmailAndPassword(auth, email, password);
    }

    public async verifyToken(token: string): Promise<any> {
        return await adminAuth.verifyIdToken(token);
    }

}
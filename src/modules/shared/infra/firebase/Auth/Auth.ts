import { auth, adminAuth } from '../index';
import {
    AuthCredential,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithCredential,
    GoogleAuthProvider,
    UserCredential
} from "firebase/auth";
import AppError from '../../../../../errors/AppError';

export interface AuthCredentials extends AuthCredential { }


/**
 * @interface IAuth
 * @desc Reponsável por fazer autenticação com o firebase
 **/

export interface IAuth {
    createUserWithMail(email: string, password: string): Promise<any>
    sigInWithCredential(googleUser: any): Promise<UserCredential>
    signInEmailAndPassword(email: string, password: string): Promise<UserCredential>
    verifyToken(route: string): Promise<any>
}

export default class Auth implements IAuth {

    public async createUserWithMail(email: string, password: string): Promise<any> {
        const createUser = await createUserWithEmailAndPassword(auth, email, password);

        if (!createUser || !createUser.user || !createUser.user.email) {
            return {
                error: 'User not created'
            };
        }

        /**
        * Create a new user in the database
        * Option Desabilited
        * @Gabriel Sa
        **/
        // const query = new Query(createUser.user.uid);

        // const createUserInDb = await query.createUser({
        //     email: createUser.user.email,
        // });

        // if (!createUserInDb)
        //     return createUser;

        return createUser;
    }

    public async sigInWithCredential(googleUser: any): Promise<UserCredential> {

        // Build Firebase credential with the Google ID token.
        const credential = GoogleAuthProvider.credential(googleUser.wc.id_token);

        // Sign in with credential from the Google user.
        const user = await signInWithCredential(auth, credential).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
            throw new AppError("Google auth error", 500, 'error');
        });

        // const uuid = (await user).user.uid;

        // const additionalClaims = {
        //     premiumAccount: false,
        //     adminAccount: false,

        // };

        // const authas = adminAuth.createCustomToken(uuid, additionalClaims).then((customToken) => {
        //     // Send token back to client
        //     return customToken;
        // })

        //console.log((await user.user.getIdTokenResult()).token);

        const token = (await user.user.getIdTokenResult()).token;

        return user;
    }

    public async signInEmailAndPassword(email: string, password: string): Promise<UserCredential> {
        return await signInWithEmailAndPassword(auth, email, password);
    }

    public async verifyToken(token: string): Promise<any> {
        return await adminAuth.verifyIdToken(token);
    }

}
/**
 * @interface IAuth
 * @desc Reponsável por fazer autenticação com o firebase
 **/

export interface IAuth {
    createUserWithMail(email: string, password: string): Promise<any>
    sigInWithCredential(googleUser: any): Promise<any>
    signInEmailAndPassword(email: string, password: string): Promise<any>
    verifyToken(route: string): Promise<any>
}

export default class Auth implements IAuth {

    public async createUserWithMail(email: string, password: string): Promise<any> {

        return {

        };
    }

    public async sigInWithCredential(googleUser: any): Promise<any> {

        return 'sigInWithCredential';
    }

    public async signInEmailAndPassword(email: string, password: string): Promise<any> {
        return 'signInEmailAndPassword';
    }

    public async verifyToken(token: string): Promise<any> {
        return 'verifyToken';
    }

}
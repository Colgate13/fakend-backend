import AppError from '../../../errors/AppError';
import { IAuth, AuthCredentials } from '../../shared/infra/firebase/Auth/Auth';
import { Yup } from '../../shared/utils/Yup';

export default class SigInUserGoogleService {

    private auth: IAuth;

    constructor(AuthClass: IAuth) {
        this.auth = AuthClass;
    }

    public async sigInWithCredentials(credential: AuthCredentials): Promise<any> {

        if (!credential) {
            throw new AppError("Missing googleUser", 400, 'warn');
        }

        const createUser = await this.auth.sigInWithCredential(credential);

        if (!createUser) {
            throw new AppError("Error in sinIn with google", 400, 'warn');
        }

        return {
            message: "User SigIn With Google",
            token: await createUser.user.getIdToken()
        }
    }
}

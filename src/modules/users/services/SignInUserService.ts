import Auth, { AuthCredentials } from '../../shared/infra/firebase/Auth/Auth';

export default class CreateService {
    public async create(email: string, password: string): Promise<any> {
        const auth = new Auth();

        const createUser = auth.signInEmailAndPassword(email, password);

        return createUser
    }

    public async sigInWithCredentials(credential: AuthCredentials): Promise<any> {
        const auth = new Auth();

        const createUser = auth.sigInWithCredential(credential);

        return createUser
    }
}

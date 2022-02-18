import Auth from '../../shared/infra/firebase/Auth/Auth';

export default class CreateService {
    public async createWithMail(email: string, password: string): Promise<any> {
        const auth = new Auth();

        const createUser = auth.createUserWithMail(email, password);

        return createUser
    }
}

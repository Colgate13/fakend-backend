import AppError from '../../../errors/AppError';
import { IAuth } from '../../shared/infra/firebase/Auth/Auth';
import { Yup } from '../../shared/utils/Yup';

export default class CreateUserService {

    private Auth: IAuth;

    constructor(AuthClass: IAuth) {
        this.Auth = AuthClass;
    }

    public async createWithMail(email: string, password: string): Promise<any> {

        const schema = Yup.object().shape({
            email: Yup.string().required('E-mail is required').email('Invalid email'),
            password: Yup.string().required('Password is required')
        });

        await schema.validate({
            email,
            password
        }, {
            abortEarly: false,
        }).catch((err) => {
            throw new AppError(err.errors[0], 400, 'warn');
        });

        const createUser = await this.Auth.createUserWithMail(email, password);


        if (createUser.error) {
            throw new AppError(createUser.error, 400, 'warn');
        }


        if (!createUser || !createUser.user) {
            throw new AppError("User not created", 400, 'error');
        }

        const user = {
            id: createUser.user.uid,
            email: createUser.user.email,
            name: createUser.user.displayName,
            photo: createUser.user.photoURL,
            token: createUser.user.refreshToken
        }

        return user;
    }
}

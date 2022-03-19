import AppError from '../../../errors/AppError';
import { IAuth, AuthCredentials } from '../../shared/infra/firebase/Auth/Auth';
import { Yup } from '../../shared/utils/Yup';

export default class SignInUserService {

    private auth: IAuth;

    constructor(AuthClass: IAuth) {
        this.auth = AuthClass;
    }

    public async create(email: string, password: string): Promise<any> {

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


        const createUser = await this.auth.signInEmailAndPassword(email, password);

        if (!createUser) {
            throw new AppError("Password or email is wrong", 400, 'warn');
        }

        if (!createUser.user) {
            throw new AppError("Error in login", 400, 'error');
        }

        const { user } = createUser;

        const userData = {
            message: "Sing in successfully",
            email: user.email,
            uid: user.uid,
            token: await user.getIdToken(),
        }

        return userData
    }
}

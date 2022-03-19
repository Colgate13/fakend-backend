import AppError from "../../errors/AppError";
import SignInUserService from "../../modules/users/services/SignInUserService";
import SigInUserGoogleService from "../../modules/users/services/SigInUserGoogleService";
import Auth from './mock/Auth';
import { AuthCredentials } from '../../modules/shared/infra/firebase/Auth/Auth';

describe('User SingUp/SingIn', () => {
    it('Deve ser capaz de logar um usuario', async () => {

        const signInUserService = new SignInUserService(new Auth());

        const expected = {
            "message": "Sing in successfully",
            "email": "testecruiandoa@gmail.com",
            "uid": "rnFE40Qt1vhoRaSUYkjqFXy63ZI2",
            "token": "AIwUaOmuW9slJD6cytuUNEJHl1CaRAfqoa8HfFcKqz2PUBaRmo_hpuTueQ6VXJBt5iEOdVUkgOuqqFums9pPsnkUjzx35zKvizIScv4APkNmhipt0fK18CtvUPlsAD_psMCjHSdVs8d83AOvCft3BpEZ-1XB5GsXVF44SRpqfeakA4bwcf-q6xlJyUG4An3q54HJpyS32fPREPOzv66RCJgO4QcsrKKgeg"
        };

        const user = await signInUserService.create('testecruiandoa@gmail.com', '123456')

        expect(user).toEqual(expected);
    });

    it('Deve ser capaz de se logar usando google auth', async () => {

        const sigInUserGoogleService = new SigInUserGoogleService(new Auth());

        const expected = {
            "message": "User SigIn With Google",
            "token": "AIwUaOmuW9slJD6cytuUNEJHl1CaRAfqoa8HfFcKqz2PUBaRmo_hpuTueQ6VXJBt5iEOdVUkgOuqqFums9pPsnkUjzx35zKvizIScv4APkNmhipt0fK18CtvUPlsAD_psMCjHSdVs8d83AOvCft3BpEZ-1XB5GsXVF44SRpqfeakA4bwcf-q6xlJyUG4An3q54HJpyS32fPREPOzv66RCJgO4QcsrKKgeg"
        }

        const googleProvider: AuthCredentials = {
            providerId: 'google.com',
            signInMethod: 'password',
            toJSON(): any { }
        }

        const user = await sigInUserGoogleService.sigInWithCredentials(googleProvider)

        expect(user).toEqual(expected);
    });
});
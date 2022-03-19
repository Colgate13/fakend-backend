import AppError from "../../errors/AppError";
import CreateUserService from "../../modules/users/services/CreateUserService";
import Auth from './mock/Auth';
import AuthReturnError from './mock/AuthReturnError';
import AutoReturnObjectEmpty from './mock/AutoReturnObjectEmpty';

describe('Create User', () => {
    it('should be able to Create User', async () => {

        const createUserService = new CreateUserService(new Auth());

        const expected = { "email": "testecruiandoa@gmail.com", "id": "rnFE40Qt1vhoRaSUYkjqFXy63ZI2", "name": null, "photo": null, "token": "AIwUaOmuW9slJD6cytuUNEJHl1CaRAfqoa8HfFcKqz2PUBaRmo_hpuTueQ6VXJBt5iEOdVUkgOuqqFums9pPsnkUjzx35zKvizIScv4APkNmhipt0fK18CtvUPlsAD_psMCjHSdVs8d83AOvCft3BpEZ-1XB5GsXVF44SRpqfeakA4bwcf-q6xlJyUG4An3q54HJpyS32fPREPOzv66RCJgO4QcsrKKgeg" };

        const user = await createUserService.createWithMail('test@gmail.com', '123456');

        expect(user).toEqual(expected);
    });


    it('should be dont able to Create User because dont pass email', async () => {

        const createUserService = new CreateUserService(new Auth());

        await createUserService.createWithMail('testeão', '123456').catch((e) => {
            if (e instanceof AppError) {
                expect(e.message).toEqual('Invalid email');
            }

        });
    });

    it('should be dont able to Create User because dont pass password', async () => {

        const createUserService = new CreateUserService(new Auth());

        await createUserService.createWithMail('test@gmail.com', '').catch((e) => {
            if (e instanceof AppError) {
                expect(e.message).toEqual('Password is required');
            }

        });

    });

    it('Deve ser capaz de não criar um user pois o Query retorna Error/Undefined', async () => {

        const createUserService = new CreateUserService(new AuthReturnError());

        await createUserService.createWithMail('test@gmail.com', '123456').catch((e) => {
            if (e instanceof AppError) {
                expect(e.message).toEqual('User not created');
            }
        });

        await createUserService.createWithMail('test@gmail.com', '123456').catch((e) => {
            if (e instanceof AppError) {
                expect(e.message).toEqual('User not created');
            }
        });



        const createUserServiceObjectEmpty = new CreateUserService(new AutoReturnObjectEmpty());

        await createUserServiceObjectEmpty.createWithMail('test@gmail.com', '123456').catch((e) => {
            if (e instanceof AppError) {
                expect(e.message).toEqual("User not created");
            }
        });

    });
});
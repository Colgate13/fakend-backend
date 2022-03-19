import { Response, Request } from 'express';
import AppError from '../../../../../errors/AppError';
import SigInUserGoogleService from "../../../services/SigInUserGoogleService";
import Auth from '../../../../shared/infra/firebase/Auth/Auth'

class CreateController {
    public async execute(
        request: Request,
        response: Response): Promise<any> {

        const googleUser = <any>request.body;

        const sigInUserGoogleService = new SigInUserGoogleService(new Auth());

        const SigIn = await sigInUserGoogleService.sigInWithCredentials(googleUser);

        return response.json(SigIn);

    }
}

export default CreateController;
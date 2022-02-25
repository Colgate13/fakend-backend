import { Response, Request } from 'express';
import EditJsonService from "../services/EditJsonService";
import { IEditJson } from '../../shared/infra/firebase/Query/interfaces/Ijson';

import AppError from '../../../errors/AppError';

class EditJsonController {
    public async editJson(
        request: Request,
        response: Response): Promise<any> {

        const userUid = request.user.uid;
        const { jsonId } = request.params;
        const { name, json, method, route }: IEditJson = request.body;

        const dataJson: any = {
            name, json, method, route
        }

        if (!jsonId) {
            throw new AppError("JsonId is required", 400, 'warn');
        }

        let objUpdate: any = {}
        Object.keys(dataJson).forEach((e) => {
            if (dataJson[e] !== undefined && dataJson[e] !== null) {
                objUpdate[e] = dataJson[e]
            }
        })

        const editJsonService = new EditJsonService();
        const editJson = await editJsonService.EditJsonDatas(jsonId, userUid, objUpdate);

        return response.status(200).json(editJson);


        throw new AppError("No json found for received data", 404, 'warn');
    }
}

export default EditJsonController;
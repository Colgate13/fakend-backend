import { Response, Request } from 'express';
import EditJsonService from "../../../services/EditJsonService";
import { IEditJson } from '../../../../shared/infra/firebase/Query/interfaces/Ijson';
import { QuerySetters } from '../../../../shared/infra/firebase/Query/QuerySetters';

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

        const editJsonService = new EditJsonService(new QuerySetters(userUid));
        const editJson = await editJsonService.EditJsonDatas(jsonId, dataJson);

        return response.status(200).json(editJson);
    }
}

export default EditJsonController;
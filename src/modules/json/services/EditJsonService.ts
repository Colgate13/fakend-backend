import QuerySetterns from '../../shared/infra/firebase/Query/QuerySetterns';
import { IEditJson } from '../../shared/infra/firebase/Query/interfaces/Ijson';

export default class EditJsonService {
    public async EditJsonDatas(jsonId: string, userUid: string, data: IEditJson): Promise<any> {
        const querySetterns = new QuerySetterns(userUid);

        try {
            await querySetterns.editJson(jsonId, data);

            return {
                type: 'success',
                message: 'Json edited with success',
                id: jsonId,
                changes: {
                    data
                }
            }
        } catch (error) {
            return {
                type: 'error',
                message: 'Don\'t edited json',
                id: jsonId,
                changes: {
                    data
                }
            };
        }

    }
}

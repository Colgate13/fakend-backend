import { IQuerySetterns } from '../../shared/infra/firebase/Query/QuerySetterns';
import { IEditJson } from '../../shared/infra/firebase/Query/interfaces/Ijson';
import AppError from '../../../errors/AppError';

export default class EditJsonService {

    private QuerySetterns: IQuerySetterns;

    constructor(QuerySetternsClass: IQuerySetterns) {
        this.QuerySetterns = QuerySetternsClass;
    }

    public async EditJsonDatas(jsonId: string, data: IEditJson): Promise<any> {

        const { name, json, method, route }: IEditJson = data;

        const dataJson: any = {
            name, json, method, route
        }

        let objUpdate: any = {}
        Object.keys(dataJson).forEach((e) => {
            if (dataJson[e] !== undefined && dataJson[e] !== null) {
                objUpdate[e] = dataJson[e]
            }
        })

        if (objUpdate === {}) {
            throw new AppError('Object to update are null', 400, 'warn');
        }


        await this.QuerySetterns.editJson(jsonId, objUpdate).catch(err => {
            return {
                type: 'error',
                message: 'Json dont edited',
                id: jsonId,
                changes: objUpdate
            };
        });


        return {
            type: 'success',
            message: 'Json edited with success',
            id: jsonId,
            changes: objUpdate

        }
    }
}

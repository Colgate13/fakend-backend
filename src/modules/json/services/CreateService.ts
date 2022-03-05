import * as Yup from 'yup';
import AppError from '../../../errors/AppError';
import { IQuerySetterns } from '../../shared/infra/firebase/Query/QuerySetterns';
import { ICreateJson } from '../../shared/infra/firebase/Query/interfaces/Ijson';
import { createUuid } from '../../shared/utils/Uuid';

export default class CreateService {

    private QuerySetterns: IQuerySetterns;

    constructor(QuerySetternsClass: IQuerySetterns) {
        this.QuerySetterns = QuerySetternsClass;
    }

    public async create({ name, route, json, method }: ICreateJson): Promise<any> {

        // yup validation
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            route: Yup.string().required(),
            json: Yup.object().required(),
            method: Yup.string().required()
        });

        await schema.validate({
            name,
            route,
            json,
            method
        }, {
            abortEarly: false,
        }).catch((err) => {
            throw new AppError(err.errors[0], 400, 'warn');
        });

        const jsonStringify = JSON.stringify(json);

        const uuid = await createUuid();

        const create = await this.QuerySetterns.createJson(uuid, {
            name: name,
            route: route,
            json: jsonStringify,
            method: method
        });

        if (!create) {
            throw new AppError('Error create json', 500, 'error');
        }

        return {
            id: uuid,
            name: name,
            route: route,
            json: jsonStringify,
            method: method
        }
    }
}

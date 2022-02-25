import QueryGetters, { ICreateJson } from '../../shared/infra/firebase/Query/QueryGetters';
import { createUuid } from '../../shared/utils/Uuid';

export default class CreateService {
    public async create(userUid: string, { name, route, json, method }: ICreateJson): Promise<any> {
        const queryGetters = new QueryGetters(userUid);
        const uuid = await createUuid();

        const create = await queryGetters.createJson(uuid, {
            name: name,
            route: route,
            json: json,
            method: method
        });

        return create
    }
}

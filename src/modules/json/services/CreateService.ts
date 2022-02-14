import Query, { ICreateJson } from '../../shared/infra/firebase/Query/Query';
import { createUuid } from '../../shared/utils/Uuid';

export default class CreateService {
    public async create(userUid: string, { name, route, json }: ICreateJson): Promise<any> {
        const query = new Query(userUid);
        const uuid = await createUuid();

        const create = query.createJson(uuid, {
            name: name,
            route: route,
            json: json
        });

        return create
    }
}

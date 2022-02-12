import Query, { ICreateJson } from '../../shared/infra/firebase/Query';
import { createUuid } from '../../shared/utils/Uuid';

export default class CreateService {
    public async create({ name, route, json }: ICreateJson): Promise<any> {
        const query = new Query('J4UY0wTa9q5cG2oicXBB');

        const uuid = await createUuid();

        query.createJson(uuid, {
            name: name,
            route: route,
            json: json
        });
    }
}

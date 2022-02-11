import db from '../../shared/infra/database/index';
import Query, { ICreateJson } from '../../shared/infra/database/Query';


export default class CreateService {
    public async create({ name, route, json }: ICreateJson): Promise<any> {
        const query = new Query('J4UY0wTa9q5cG2oicXBB');

        query.createJson('123', {
            name: name,
            route: route,
            json: json
        });
    }
}

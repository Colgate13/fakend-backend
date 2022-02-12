import Query from '../../shared/infra/database/Query';

export default class JsonReadService {
    public async getAllJson(): Promise<any> {
        const query = new Query('J4UY0wTa9q5cG2oicXBB');

        const Datajsons = await query.getAllJsons();

        const jsons = Datajsons.map((doc: any) => {
            return {
                id: doc.id,
                name: doc.data().name,
                route: doc.data().route,
                json: doc.data().json
            }
        });

        return jsons
    }
}

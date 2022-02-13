import Query from '../../shared/infra/firebase/Query/Query';

export default class JsonReadService {
    public async getAllJson(): Promise<any> {
        const query = new Query('JocwumsxBxJxXgf1DrsC');

        const Datajsons = await query.getAllJsons();

        const jsons = Datajsons.map((doc: any) => {
            return {
                doc: doc.id,
                id: doc.data().id,
                name: doc.data().name,
                route: doc.data().route,
                json: doc.data().json
            }
        });

        return jsons
    }

    public async getJson(IdUser: string, route: string): Promise<any> {
        const query = new Query(IdUser);

        const Datajsons = await query.getJson(route);

        const jsons = Datajsons.map((doc: any) => {
            return doc.data().json

        });

        return jsons
    }
}

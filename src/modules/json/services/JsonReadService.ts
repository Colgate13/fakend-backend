import Query from '../../shared/infra/firebase/Query/Query';

export default class JsonReadService {
    public async getAllJson(userUid: string): Promise<any> {
        const query = new Query(userUid);

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

    public async getJson(userUid: string, route: string): Promise<any> {
        const query = new Query(userUid);

        const Datajsons = await query.getJson(route);

        try {
            return JSON.parse(Datajsons[0].data().json);
        } catch (error) {
            return Datajsons[0].data().json;
        }
    }
}

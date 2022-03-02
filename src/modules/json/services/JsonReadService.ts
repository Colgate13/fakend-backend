import QueryGetters from '../../shared/infra/firebase/Query/QueryGetters';

export default class JsonReadService {
    public async getJsonDatas(jsonId: string, userUid: string): Promise<any> {
        const queryGetters = new QueryGetters(userUid);

        const Datajsons = await queryGetters.getJsonData(jsonId);

        return Datajsons
    }

    public async getAllJson(userUid: string): Promise<any> {
        const queryGetters = new QueryGetters(userUid);

        const Datajsons = await queryGetters.getAllJsons();

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
        const queryGetters = new QueryGetters(userUid);

        const Datajsons = await queryGetters.getJson(route);

        try {
            return JSON.parse(Datajsons[0].data().json);
        } catch (error) {
            return Datajsons[0].data().json;
        }
    }
}

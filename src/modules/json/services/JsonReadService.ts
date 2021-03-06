import { IQueryGetters } from '../../shared/infra/firebase/Query/QueryGetters';

export default class JsonReadService {

    private QueryGetters: IQueryGetters;

    constructor(QueryGettersClass: IQueryGetters) {
        this.QueryGetters = QueryGettersClass;
    }

    public async jsonData(jsonId: string): Promise<any> {

        const Datajsons = await this.QueryGetters.getJsonData(jsonId);

        return Datajsons
    }

    public async alljsonData(): Promise<any> {

        const Datajsons = await this.QueryGetters.alljsonData();

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

    public async getJson(route: string, IdUser: string): Promise<any> {

        route = route.replace(`/json/${IdUser}`, '')

        const Datajsons = await this.QueryGetters.getJson(route);

        return JSON.parse(Datajsons[0].data().json);
    }
}

export interface ICreateUser {
    id?: string;
    email: string;
    name?: string;
    ProfileImage?: string;
}

export interface ICreateJson {
    name: string;
    route: string;
    json: any;
    method?: string;
}

export interface IEditJson {
    name?: string | null;
    route?: string | null;
    json?: any | null;
    method?: string | null;
}
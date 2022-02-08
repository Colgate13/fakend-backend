import ServerHttp from './modules/shared/infra/http/server_HTTP';

const server = new ServerHttp(3000);

server.init();

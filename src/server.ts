import dotenv from 'dotenv';

import ServerHttp from './modules/shared/infra/http/server_HTTP';

dotenv.config();

const PORT = process.env.PORT || "3000";

const server = new ServerHttp(PORT);

server.init();

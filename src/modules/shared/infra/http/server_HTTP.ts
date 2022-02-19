import express from 'express';
import cors from 'cors';

import routes from './routes/index';

class ServerHttp {

  protected app;

  constructor(port: number | string) {
    this.app = express();
    this.start(port);
  }

  init() {
    this.routes();
  }

  start(port: number | string) {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  }

  routes() {
    this.app.use(routes);
  }

}
export default ServerHttp;


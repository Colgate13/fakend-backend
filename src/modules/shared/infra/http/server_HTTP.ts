import express from 'express';

import routes from './routes/index';

class ServerHttp {

  protected app;

  constructor(port: number) {
    this.app = express();
    this.start(port);
  }

  init() {
    this.routes();
  }

  start(port: number) {
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


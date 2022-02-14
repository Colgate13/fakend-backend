import { Router } from 'express';
import GlobalHandlerAuthenticate from './GlobalHandlerAuthenticate';

const middlewares = Router();

middlewares.use(GlobalHandlerAuthenticate)

export default middlewares;
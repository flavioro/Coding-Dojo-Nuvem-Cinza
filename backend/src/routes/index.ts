import { Router } from 'express';
import calculate from './calculate';

const routes = Router();

routes.use('/calculate', calculate);

export default routes;

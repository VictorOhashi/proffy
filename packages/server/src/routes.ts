import express from 'express';
import AulasController from './controllers/aulasController';
import ConexoesController from './controllers/ConexoesController';

const routes = express.Router();

const aulasController = new AulasController();
const conexoesController = new ConexoesController();

routes.get('/aulas', aulasController.index);
routes.post('/aulas', aulasController.create);

routes.get('/conexoes', conexoesController.index);
routes.post('/conexoes', conexoesController.create);

export default routes;

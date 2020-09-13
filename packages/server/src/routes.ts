import express from 'express';
import AulasController from './controllers/AulasController';
import ConexoesController from './controllers/ConexoesController';
import MateriasController from './controllers/MateriasController';

const routes = express.Router();

const aulasController = new AulasController();
const conexoesController = new ConexoesController();
const materiasController = new MateriasController();

routes.get('/aulas', aulasController.index);
routes.post('/aulas', aulasController.create);

routes.get('/conexoes', conexoesController.index);
routes.post('/conexoes', conexoesController.create);

routes.get('/materias', materiasController.index);
routes.post('/materias', materiasController.create);

export default routes;

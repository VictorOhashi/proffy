import { Request, Response } from 'express';
import db from '../database/connection';

type MateriasFilter = {
  nome: string;
};

export default class MateriasController {
  async index(req: Request, res: Response) {
    const { nome } = req.query as MateriasFilter;

    const materias = await db('materias').where(
      'materias.materia',
      'like',
      `%${nome}%`
    );

    return res.json(materias);
  }

  async create(req: Request, res: Response) {
    const { materia } = req.body;

    const trx = await db.transaction();

    try {
      await trx('materias').insert({
        materia,
      });
      await trx.commit();
      return res.status(201).send();
    } catch (error) {
      await trx.rollback();

      return res
        .status(400)
        .json({ message: 'Erro inesperado ao criar nova matéria', error });
    }
  }
}

import { Request, Response } from 'express';
import db from '../database/connection';

export default class ConexoesController {
  async index(_: any, res: Response) {
    const [{ total }] = await db('conexoes').count('* as total');
    return res.json({ total });
  }

  async create(req: Request, res: Response) {
    const { id_usuario } = req.body;
    await db('conexoes').insert({ id_usuario });
    return res.status(201).send();
  }
}

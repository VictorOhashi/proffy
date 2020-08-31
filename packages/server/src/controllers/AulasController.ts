import { Request, Response } from 'express';

import db from '../database/connection';
import convertHoursToMinutes from '../utils/convertHoursToMinutes';

type Horario = {
  dia_semana: number;
  horario_inicio: string;
  horario_fim: string;
};

type AulasFilter = {
  materia: string;
  horario: string;
  dia_semana: string;
};

export default class AulasController {
  async index(req: Request, res: Response) {
    const { materia, horario, dia_semana } = req.query as AulasFilter;
    if (!dia_semana || !materia || !horario) {
      return res
        .status(400)
        .json({ message: 'Filtros ausentes para pesquisar aulas' });
    }

    const timeInMinutes = convertHoursToMinutes(horario);

    const aulas = await db('aulas')
      .whereExists(function () {
        this.select('horario_aula.*')
          .from('horario_aula')
          .whereRaw('`horario_aula`.`id_aula` = `aulas`.`id`')
          .whereRaw('`horario_aula`.`dia_semana` = ??', [Number(dia_semana)])
          .whereRaw('`horario_aula`.`horario_inicio` <= ??', [timeInMinutes])
          .whereRaw('`horario_aula`.`horario_fim` > ??', [timeInMinutes]);
      })
      .where('aulas.materia', '=', materia)
      .join('usuarios', 'aulas.id_usuario', '=', 'usuarios.id')
      .select(['aulas.*', 'usuarios.*']);

    return res.json(aulas);
  }

  async create(req: Request, res: Response) {
    const {
      nome,
      avatar,
      email,
      whatsapp,
      bio,
      custo,
      materia,
      horarios,
    } = req.body;
    const trx = await db.transaction();

    try {
      const [id_usuario] = await trx('usuarios').insert({
        nome,
        avatar,
        email,
        whatsapp,
        bio,
      });
      const [id_aula] = await trx('aulas').insert({
        id_usuario,
        custo,
        materia,
      });

      const horarioAula = horarios.map((horario: Horario) => {
        const { horario_inicio, horario_fim, dia_semana } = horario;
        return {
          id_aula,
          dia_semana,
          horario_inicio: convertHoursToMinutes(horario_inicio),
          horario_fim: convertHoursToMinutes(horario_fim),
        };
      });

      await trx('horario_aula').insert(horarioAula);

      await trx.commit();

      return res.status(201).send();
    } catch (error) {
      await trx.rollback();

      return res
        .status(400)
        .json({ message: 'Erro inesperado ao criar nova aula', error });
    }
  }
}

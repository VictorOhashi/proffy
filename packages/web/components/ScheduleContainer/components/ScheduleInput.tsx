import React, { memo } from 'react';

import { Trash2Outline } from '@styled-icons/evaicons-outline';
import { Input, Select } from '../..';
import { Container, DeleteButton } from '../styled';
import { Schedule } from '../ScheduleContainer';

type ScheduleInputProps = {
  id: number;
  schedule: Schedule;
  onChange: (id: number, event: any) => void;
  onDelete: (id: number) => void;
};

const ScheduleInput: React.FC<ScheduleInputProps> = memo(
  ({ id, schedule, onChange, onDelete }) => (
    <Container>
      <Select
        name="dia_semana"
        label="Dia da semana"
        color="primaryText"
        required
        initialValue={schedule.dia_semana}
        onChange={(e) => onChange(id, e)}
        options={[
          { value: 0, label: 'Domingo' },
          { value: 2, label: 'Segunda-feira' },
          { value: 3, label: 'Terça-feira' },
          { value: 4, label: 'Quarta-feira' },
          { value: 5, label: 'Quinta-feira' },
          { value: 6, label: 'Sexta-feira' },
          { value: 7, label: 'Sábado' },
        ]}
      />
      <Input
        name="horario_inicio"
        label="Das"
        required
        initialValue={schedule.horario_inicio}
        onChange={(e) => onChange(id, e)}
        type="time"
      />
      <Input
        name="horario_fim"
        label="Até"
        required
        initialValue={schedule.horario_fim}
        onChange={(e) => onChange(id, e)}
        type="time"
      />
      {id > 0 && (
        <DeleteButton
          onClick={() => onDelete(id)}
          title="Deletar horário"
          type="button"
        >
          <Trash2Outline />
          <p>Deletar horário</p>
        </DeleteButton>
      )}
    </Container>
  )
);

export default ScheduleInput;

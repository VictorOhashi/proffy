import React, { memo, useState, useCallback } from 'react';

import { Input, Select, Fieldset } from '..';

import { Container, LegendButton } from './styled';

type ScheduleInputProps = {
  id: number;
  onChange: (id: number, event: EventTarget) => void;
};

const ScheduleInput: React.FC<ScheduleInputProps> = memo(({ id, onChange }) => (
  <Container>
    <Select
      name="dia_semana"
      label="Dia da semana"
      color="primaryText"
      onChange={(e) => onChange(id, e.target)}
      options={[
        { value: 0, label: 'Domingo' },
        { value: 1, label: 'Segunda-feira' },
        { value: 2, label: 'Terça-feira' },
        { value: 2, label: 'Quarta-feira' },
        { value: 2, label: 'Quinta-feira' },
        { value: 2, label: 'Sexta-feira' },
        { value: 2, label: 'Sábado' },
      ]}
    />
    <Input
      name="horario_inicio"
      label="Das"
      onChange={(e) => onChange(id, e.target)}
      type="time"
    />
    <Input
      name="horario_fim"
      label="Até"
      onChange={(e) => onChange(id, e.target)}
      type="time"
    />
  </Container>
));

export const ScheduleContainer: React.FC = memo(() => {
  const [schedules, setSchedules] = useState([
    {
      id: 0,
      dia_semana: 0,
      horario_inicio: '',
      horario_fim: '',
    },
  ]);

  const handleAddSchedule = useCallback(() => {
    setSchedules((prev) => [
      ...prev,
      {
        id: prev.length,
        dia_semana: 0,
        horario_inicio: '',
        horario_fim: '',
      },
    ]);
  }, []);

  const handleChange = useCallback((id, { name, value }) => {
    setSchedules((prev) =>
      prev.map((s) => (s.id !== id ? s : { ...s, [name]: value }))
    );
  }, []);

  return (
    <Fieldset
      legend={
        <>
          Horários disponíveis
          <LegendButton onClick={handleAddSchedule} type="button">
            + Novo horário
          </LegendButton>
        </>
      }
    >
      {schedules.map(({ id }, index) => (
        <ScheduleInput
          key={`schedule-${index}`}
          id={id}
          onChange={handleChange}
        />
      ))}
    </Fieldset>
  );
});

export default ScheduleContainer;

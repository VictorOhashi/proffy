import React, { memo, useState, useCallback } from 'react';

import { Input, Select, Fieldset } from '..';

import { Container, LegendButton } from './styled';

type ScheduleInputProps = {
  id: number;
  onChange: (id: number, event: any) => void;
};

const ScheduleInput: React.FC<ScheduleInputProps> = memo(({ id, onChange }) => (
  <Container>
    <Select
      name="dia_semana"
      label="Dia da semana"
      color="primaryText"
      onChange={(e) => onChange(id, e)}
      options={[
        { value: 0, label: 'Domingo' },
        { value: 1, label: 'Segunda-feira' },
        { value: 2, label: 'Terça-feira' },
        { value: 3, label: 'Quarta-feira' },
        { value: 4, label: 'Quinta-feira' },
        { value: 5, label: 'Sexta-feira' },
        { value: 6, label: 'Sábado' },
      ]}
    />
    <Input
      name="horario_inicio"
      label="Das"
      onChange={(e) => onChange(id, e)}
      type="time"
    />
    <Input
      name="horario_fim"
      label="Até"
      onChange={(e) => onChange(id, e)}
      type="time"
    />
  </Container>
));

type ScheduleContainerProps = {
  onChange: (
    schedules: Array<{
      dia_semana: number;
      horario_inicio: string;
      horario_fim: string;
    }>
  ) => void;
};

export const ScheduleContainer: React.FC<ScheduleContainerProps> = memo(
  ({ onChange }) => {
    const [schedules, setSchedules] = useState([
      {
        dia_semana: 0,
        horario_inicio: '',
        horario_fim: '',
      },
    ]);

    const handleAddSchedule = useCallback(() => {
      setSchedules((prev) => [
        ...prev,
        {
          dia_semana: 0,
          horario_inicio: '',
          horario_fim: '',
        },
      ]);
    }, []);

    const handleChange = useCallback(
      (id, target) => {
        let { name, value } = target;
        setSchedules((prev) => {
          const newSchedules = prev.map((s, i) =>
            i !== id ? s : { ...s, [name]: value }
          );
          onChange(newSchedules);
          return newSchedules;
        });
      },
      [onChange]
    );

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
        {schedules.map((_, index) => (
          <ScheduleInput
            key={`schedule-${index}`}
            id={index}
            onChange={handleChange}
          />
        ))}
      </Fieldset>
    );
  }
);

export default ScheduleContainer;

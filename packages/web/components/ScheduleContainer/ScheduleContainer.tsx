import React, { memo, useState, useCallback } from 'react';

import { Fieldset } from '..';
import ScheduleInput from './components/ScheduleInput';
import { LegendButton } from './styled';

export type Schedule = {
  dia_semana: number;
  horario_inicio: string;
  horario_fim: string;
};

type ScheduleContainerProps = {
  onChange: (schedules: Array<Schedule>) => void;
};

export const ScheduleContainer: React.FC<ScheduleContainerProps> = memo(
  ({ onChange }) => {
    const [schedules, setSchedules] = useState([
      {
        dia_semana: null,
        horario_inicio: '',
        horario_fim: '',
      },
    ]);

    const handleAddSchedule = () =>
      setSchedules((prev) => [
        ...prev,
        {
          dia_semana: null,
          horario_inicio: '',
          horario_fim: '',
        },
      ]);

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

    const handleDelete = useCallback((id) => {
      setSchedules((prev) => prev.filter((_, i) => i !== id));
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
        {schedules.map((s, index) => (
          <ScheduleInput
            key={`${s.dia_semana}-${index}`}
            id={index}
            schedule={s}
            onChange={handleChange}
            onDelete={handleDelete}
          />
        ))}
      </Fieldset>
    );
  }
);

export default ScheduleContainer;

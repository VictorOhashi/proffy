import { useState } from 'react';
import styled from 'styled-components';

import { Input, Select, Fieldset } from '../../../components';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1.6rem;

  & :first-child {
    grid-column: 1 / -1;
  }

  @media (min-width: 700px) {
    grid-template-columns: 2fr repeat(2, 1fr);

    & :first-child {
      grid-column: initial;
    }
  }
`;

const LegendButton = styled.button`
  background: none;
  border: 0;
  color: ${({ theme }) => theme.colors.primary};
  font: 700 1.6rem Archivo;
  cursor: pointer;
  transition: color 0.2s;

  :hover {
    color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

export const TimeContainer = () => {
  const [horarios, setHorarios] = useState([]);
  return (
    <Fieldset
      legend={
        <>
          Horários disponíveis
          <LegendButton type="button">+ Novo horário</LegendButton>
        </>
      }
    >
      <Container>
        <Select
          name="dia_semana"
          label="Dia da semana"
          color="primaryText"
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
        <Input name="horario_inicio" label="Das" type="time" />
        <Input name="horario_fim" label="Até" type="time" />
      </Container>
    </Fieldset>
  );
};

export default TimeContainer;

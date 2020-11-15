import React from 'react';

import { Filter, SearchAlt } from '@proffy/assets/native';
import { useTheme } from 'styled-components/native';

import Collapse from '../Collapse';
import TimeInput from '../TimeInput';
import Select from '../Select';
import { InputGroup, SearchForm, SubmitButton, SubmitText } from './styled';

const TeacherSearchForm = () => {
  const { colors } = useTheme();
  return (
    <SearchForm>
      <Collapse
        startAdorment={<Filter color={colors.secundaryDark} />}
        text="Filtrar po dia, hora e matéria"
      >
        <Select
          label="Matéria"
          placeholder="Qual a matéria?"
          onChange={console.log}
          options={[{ value: 0, label: 'Domingo' }]}
        />

        <InputGroup>
          <Select
            grid={2}
            label="Dia da semana"
            placeholder="Qual o dia?"
            onChange={console.log}
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
          <TimeInput grid={2} label="Horário" onChange={console.log} />
        </InputGroup>
        <SubmitButton>
          <SearchAlt color={colors.buttonText} />
          <SubmitText>Filtrar</SubmitText>
        </SubmitButton>
      </Collapse>
    </SearchForm>
  );
};

export default TeacherSearchForm;

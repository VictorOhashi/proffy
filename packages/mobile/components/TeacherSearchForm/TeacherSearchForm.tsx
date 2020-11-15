import React from 'react';

import { Filter } from '@proffy/assets/native';
import { useTheme } from 'styled-components/native';

import Collapse from '../Collapse';
import TimeInput from '../TimeInput';
import Select from '../Select';
import { InputGroup, SearchForm } from './styled';

const TeacherSearchForm = () => {
  const theme = useTheme();
  return (
    <SearchForm>
      <Collapse
        startAdorment={<Filter color={theme.colors.secundaryDark} />}
        text="Filtrar po dia, hora e matéria"
      >
        {/* <Input label="Matéria" placeholder="Qual a matéria?" /> */}
        <Select
          label="Matéria"
          onChange={console.log}
          options={[{ value: 0, label: 'Domingo' }]}
        />

        <InputGroup>
          {/* placeholder="Qual o dia?" */}
          <Select
            grid={2}
            label="Dia da semana"
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
      </Collapse>
    </SearchForm>
  );
};

export default TeacherSearchForm;

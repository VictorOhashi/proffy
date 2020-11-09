import React from 'react';

import { Filter } from '@proffy/assets/native';
import { useTheme } from 'styled-components/native';

import Collapse from '../Collapse';
import Input from '../Input';
import { InputGroup, SearchForm } from './styled';

const TeacherSearchForm = () => {
  const theme = useTheme();
  return (
    <SearchForm>
      <Collapse
        startAdorment={<Filter color={theme.colors.secundaryDark} />}
        text="Filtrar po dia, hora e matéria"
      >
        <Input label="Matéria" placeholder="Qual a matéria?" />
        <InputGroup>
          <Input grid={2} label="Dia da semana" placeholder="Qual o dia?" />
          <Input grid={2} label="Horário" placeholder="Qual o horário?" />
        </InputGroup>
      </Collapse>
    </SearchForm>
  );
};

export default TeacherSearchForm;

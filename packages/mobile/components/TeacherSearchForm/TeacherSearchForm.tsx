import React, { useState } from 'react';

import { Input, InputBlock, InputGroup, Label, SearchForm } from './styled';
import { useTheme } from 'styled-components/native';

const TeacherSearchForm = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const theme = useTheme();
  return (
    <SearchForm>
      {isFilterOpen && (
        <>
          <Label>Matéria</Label>
          <Input
            placeholder="Qual a matéria?"
            placeholderTextColor={theme.colors.primaryDisabled}
          />
          <InputGroup>
            <InputBlock>
              <Label>Dia da semana</Label>
              <Input
                placeholder="Qual o dia?"
                placeholderTextColor={theme.colors.primaryDisabled}
              />
            </InputBlock>
            <InputBlock>
              <Label>Horário</Label>
              <Input
                placeholder="Qual o horário?"
                placeholderTextColor={theme.colors.primaryDisabled}
              />
            </InputBlock>
          </InputGroup>
        </>
      )}
    </SearchForm>
  );
};

export default TeacherSearchForm;

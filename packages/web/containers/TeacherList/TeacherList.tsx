import { useState, useCallback, memo, FormEvent } from 'react';
import { SearchAlt } from '@styled-icons/boxicons-regular';

import {
  FadeIn,
  PageHeader,
  TeacherItem,
  Input,
  Select,
} from '../../components';
import { Container, Form, MainContent, SearchButton } from './styled';

const TeacherListFilter = () => {
  const [formState, setFormState] = useState({});

  const handleFormSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      console.log(formState);
    },
    [formState]
  );

  const handleChange = useCallback(({ name, value }) => {
    setFormState((prev) => ({ ...prev, [name]: value }));
  }, []);

  return (
    <Form onSubmit={handleFormSubmit}>
      <Select
        name="materia"
        label="Máteria"
        color="primaryText"
        onChange={handleChange}
        options={[
          { value: 1, label: 'Quimica' },
          { value: 2, label: 'Biologia' },
          { value: 3, label: 'Física' },
        ]}
      />
      <Select
        name="dia_semana"
        label="Dia da semana"
        color="primaryText"
        onChange={handleChange}
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
        name="time"
        label="Hora"
        type="time"
        color="primaryText"
        onChange={handleChange}
      />
      <SearchButton type="submit">
        <SearchAlt />
        Buscar
      </SearchButton>
    </Form>
  );
};

export const TeacherList = () => {
  return (
    <FadeIn orientation="down-to-up">
      <Container>
        <PageHeader title="Estes são os proffys disponíveis">
          <TeacherListFilter />
        </PageHeader>
        <MainContent>
          <TeacherItem />
          <TeacherItem />
          <TeacherItem />
        </MainContent>
      </Container>
    </FadeIn>
  );
};

export default memo(TeacherList);

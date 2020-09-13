import { useState, useCallback, memo, FormEvent } from 'react';
import { SearchAlt } from '@styled-icons/boxicons-regular';

import {
  FadeIn,
  PageHeader,
  TeacherItem,
  Input,
  Select,
  useToast,
} from '../../components';
import { Container, Form, MainContent, SearchButton } from './styled';
import api from '../../services/api';
import { useEffect } from 'react';

const TeacherListFilter = ({ onSubmit }) => {
  const [formState, setFormState] = useState({});

  const handleFormSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      onSubmit(formState);
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
          { value: 3, label: 'Quarta-feira' },
          { value: 4, label: 'Quinta-feira' },
          { value: 5, label: 'Sexta-feira' },
          { value: 6, label: 'Sábado' },
        ]}
      />
      <Input
        name="horario"
        label="Hora"
        type="time"
        color="primaryText"
        onChange={handleChange}
      />
      <SearchButton title="Buscar" type="submit">
        <SearchAlt />
        <p>Buscar</p>
      </SearchButton>
    </Form>
  );
};

export const TeacherList = memo(() => {
  const [aulas, setAulas] = useState([]);
  const [params, setParams] = useState();
  const showToast = useToast();

  useEffect(() => {
    api
      .get('aulas', {
        params,
      })
      .then(({ data }) => setAulas(data))
      .catch((e) => showToast(e.message, { type: 'error' }));
  }, [params]);

  const handleSubmit = useCallback((params) => {
    setParams(params);
  }, []);

  return (
    <FadeIn orientation="down-to-up">
      <Container>
        <PageHeader title="Estes são os proffys disponíveis">
          <TeacherListFilter onSubmit={handleSubmit} />
        </PageHeader>
        <MainContent>
          {aulas.length > 0
            ? aulas.map((aula) => <TeacherItem key={aula.id} aula={aula} />)
            : 'null'}
        </MainContent>
      </Container>
    </FadeIn>
  );
});

export default TeacherList;

import { memo, useState, useCallback, useEffect, FormEvent } from 'react';

import { SearchAlt } from '@styled-icons/boxicons-regular';
import { Input, Select, useToast } from '../../../components';
import { Form, SearchButton } from '../styled';
import api from '../../../services/api';

type TeacherListFilterProps = {
  onSubmit: (formState: object) => void;
};

const TeacherListFilter: React.FC<TeacherListFilterProps> = memo(
  ({ onSubmit }) => {
    const [formState, setFormState] = useState({});
    const [materias, setMaterias] = useState([]);
    const showToast = useToast();

    useEffect(() => {
      api
        .get('materias')
        .then(({ data }) =>
          setMaterias(data.map((d) => ({ value: d.id, label: d.materia })))
        )
        .catch((e) => showToast(e.message, { type: 'error' }));
    }, []);

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
          options={materias}
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
  }
);

export default TeacherListFilter;

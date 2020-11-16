import React, { useEffect, useState } from 'react';

import { AulasFilter } from 'proffy';
import { Filter, SearchAlt } from '@proffy/assets/native';
import { useTheme } from 'styled-components/native';

import Collapse from '../Collapse';
import TimeInput from '../TimeInput';
import Select from '../Select';
import { InputGroup, SearchForm, SubmitButton, SubmitText } from './styled';
import api from '../../services/api';

type Materia = { id: number; materia: string };

type TeacherSearchForm = {
  onSubmit: (value: AulasFilter) => void;
};

const TeacherSearchForm: React.FC<TeacherSearchForm> = ({ onSubmit }) => {
  const { colors } = useTheme();
  const [materias, setMaterias] = useState([]);
  const [values, setValues] = useState({});

  useEffect(() => {
    api
      .get('materias')
      .then(({ data }) =>
        setMaterias(
          data.map((d: Materia) => ({ value: d.id, label: d.materia }))
        )
      );
  }, []);

  const handleChange = (value: any, name: string) => {
    setValues((v) => ({ ...v, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit(values);
  };

  return (
    <SearchForm>
      <Collapse
        startAdorment={<Filter color={colors.secundaryDark} />}
        text="Filtrar po dia, hora e matéria"
      >
        <Select
          label="Matéria"
          placeholder="Qual a matéria?"
          onChange={(v) => handleChange(v, 'materia')}
          options={materias}
        />

        <InputGroup>
          <Select
            grid={2}
            label="Dia da semana"
            placeholder="Qual o dia?"
            onChange={(v) => handleChange(v, 'dia_semana')}
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
          <TimeInput
            grid={2}
            label="Horário"
            onChange={(v) => handleChange(v, 'horario')}
          />
        </InputGroup>
        <SubmitButton onPress={() => handleSubmit()}>
          <SearchAlt color={colors.buttonText} />
          <SubmitText>Filtrar</SubmitText>
        </SubmitButton>
      </Collapse>
    </SearchForm>
  );
};

export default TeacherSearchForm;

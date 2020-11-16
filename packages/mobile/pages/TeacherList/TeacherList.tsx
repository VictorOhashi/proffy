import React, { useState } from 'react';
import { useEffect } from 'react';

import { Aula, AulasFilter } from 'proffy';
import {
  PageHeader,
  TeacherItem,
  TeacherListContainer,
  TeacherSearchForm,
} from '../../components';
import api from '../../services/api';

const TeacherListPage = () => {
  const [aulas, setAulas] = useState([]);
  const [params, setParams] = useState<AulasFilter>({});

  const handleFilter = (filter: object) => {
    setParams(filter);
  };

  useEffect(() => {
    api.get('aulas', { params }).then(({ data }) => {
      setAulas(data);
    });
  }, [params]);

  return (
    <>
      <PageHeader title="Proffys disponíveis">
        <TeacherSearchForm onSubmit={handleFilter} />
      </PageHeader>
      <TeacherListContainer>
        {aulas.length > 0
          ? aulas.map((aula: Aula) => <TeacherItem key={aula.id} aula={aula} />)
          : null}
      </TeacherListContainer>
    </>
  );
};

export default TeacherListPage;

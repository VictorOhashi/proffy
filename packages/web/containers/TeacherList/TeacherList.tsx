import { useState, useCallback, memo, useEffect, useRef } from 'react';

import { Archive } from '@styled-icons/boxicons-regular';
import {
  FadeIn,
  PageHeader,
  TeacherItem,
  EmptyState,
  useToast,
} from '../../components';
import { Container, MainContent } from './styled';
import TeacherListFilter from './components/TeacherListFilter';
import api from '../../services/api';

export const TeacherList = memo(() => {
  const [aulas, setAulas] = useState([]);
  const [params, setParams] = useState();
  const [reset, setReset] = useState(0);
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

  const handleClearForm = useCallback(() => {
    setParams(null);
    setReset(Math.random());
  }, []);

  return (
    <FadeIn orientation="down-to-up">
      <Container>
        <PageHeader title="Estes são os proffys disponíveis">
          <TeacherListFilter key={reset} onSubmit={handleSubmit} />
        </PageHeader>
        <MainContent>
          {aulas.length > 0 ? (
            aulas.map((aula) => <TeacherItem key={aula.id} aula={aula} />)
          ) : (
            <EmptyState
              icon={Archive}
              title="Nenhum professor encontrado"
              subTitle="Nenhum professor encontrado em nossos arquivos, tente alterar os filtros"
              buttonText="Limpar pesquisa"
              onClick={handleClearForm}
            />
          )}
        </MainContent>
      </Container>
    </FadeIn>
  );
});

export default TeacherList;

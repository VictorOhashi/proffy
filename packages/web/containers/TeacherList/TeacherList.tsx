import { useRouter } from 'next/router';

import { SearchOff } from '@styled-icons/material';
import { FadeIn, PageHeader, TeacherItem, EmptyState } from '../../components';
import { Container, MainContent } from './styled';
import TeacherListFilter from './components/TeacherListFilter';

export type Aula = {
  id: number;
  materia: string;
  custo: number;
  nome: string;
  email: string;
  avatar: string;
  whatsapp: number;
  bio: string;
};

type TeacherListProps = {
  aulas: Array<Aula>;
};

export const TeacherList: React.FC<TeacherListProps> = ({ aulas }) => {
  const router = useRouter();

  const handleQueryParams = (params: object) => {
    let query = {};
    Object.keys(params).map((key) => {
      if (params[key] !== undefined) {
        query[key] = params[key];
      }
    });
    router.push({
      query,
    });
  };

  return (
    <FadeIn orientation="down-to-up">
      <Container>
        <PageHeader title="Estes são os proffys disponíveis">
          <TeacherListFilter onSubmit={handleQueryParams} />
        </PageHeader>
        <MainContent>
          {aulas.length > 0 ? (
            aulas.map((aula) => <TeacherItem key={aula.id} aula={aula} />)
          ) : (
            <EmptyState
              icon={SearchOff}
              title="Nenhum professor encontrado"
              subTitle="Nenhum professor encontrado em nossos arquivos, tente alterar os filtros"
              buttonText="Limpar pesquisa"
              onClick={() => handleQueryParams({})}
            />
          )}
        </MainContent>
      </Container>
    </FadeIn>
  );
};

TeacherList.defaultProps = {
  aulas: [],
};

export default TeacherList;

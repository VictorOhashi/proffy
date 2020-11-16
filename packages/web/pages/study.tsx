import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { AulasFilter } from 'proffy';
import { FadeIn } from '../components';
import TeacherListContainer from '../containers/TeacherList';
import api from '../services/api';

const TeacherList = ({ aulas }) => {
  return (
    <>
      <Head>
        <title>TeacherList</title>
      </Head>

      <FadeIn orientation="down-to-up">
        <TeacherListContainer aulas={aulas} />
      </FadeIn>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { materia, horario, dia_semana } = query as AulasFilter;
  const { data } = await api.get('aulas', {
    params: {
      horario,
      materia: materia && Number(materia),
      dia_semana: dia_semana && Number(dia_semana),
    },
  });
  return { props: { aulas: data } };
};

export default TeacherList;

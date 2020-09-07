import Head from 'next/head';

import { FadeIn } from '../components';
import TeacherListContainer from '../containers/TeacherList';

const TeacherList = () => {
  return (
    <>
      <Head>
        <title>TeacherList</title>
      </Head>

      <FadeIn orientation="down-to-up">
        <TeacherListContainer />
      </FadeIn>
    </>
  );
};

export default TeacherList;

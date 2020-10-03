import Head from 'next/head';

import { FadeIn } from '../components';
import TeacherFormContainer from '../containers/TeacherForm';

const TeacherForm = () => {
  return (
    <>
      <Head>
        <title>TeacherForm</title>
      </Head>

      <FadeIn orientation="down-to-up">
        <TeacherFormContainer />
      </FadeIn>
    </>
  );
};

export default TeacherForm;

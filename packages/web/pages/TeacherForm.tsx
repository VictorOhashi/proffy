import Head from 'next/head';

import TeacherFormContainer from '../containers/TeacherForm';

const TeacherForm = () => {
  return (
    <>
      <Head>
        <title>TeacherForm</title>
      </Head>
      <TeacherFormContainer />
    </>
  );
};

export default TeacherForm;

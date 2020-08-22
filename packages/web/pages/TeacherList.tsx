import Head from 'next/head';

import TeacherListContainer from '../containers/TeacherList';

const TeacherList = () => {
  return (
    <>
      <Head>
        <title>TeacherList</title>
      </Head>
      <TeacherListContainer />
    </>
  );
};

export default TeacherList;

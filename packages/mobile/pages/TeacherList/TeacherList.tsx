import React from 'react';

import {
  PageHeader,
  TeacherItem,
  TeacherListContainer,
  TeacherSearchForm,
} from '../../components';

const TeacherListPage = () => {
  return (
    <>
      <PageHeader title="Proffys disponíveis">
        <TeacherSearchForm />
      </PageHeader>
      <TeacherListContainer>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </TeacherListContainer>
    </>
  );
};

export default TeacherListPage;

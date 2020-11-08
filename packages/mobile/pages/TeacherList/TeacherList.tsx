import React from 'react';

import {
  PageHeader,
  TeacherItem,
  TeacherListContainer,
} from '../../components';

const TeacherListPage = () => {
  return (
    <>
      <PageHeader title="Proffys disponíveis" />
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

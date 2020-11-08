import React from 'react';

import {
  PageHeader,
  TeacherItem,
  TeacherListContainer,
} from '../../components';

const FavoritesPage = () => {
  return (
    <>
      <PageHeader title="Meus proffys favoritos" />
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

export default FavoritesPage;

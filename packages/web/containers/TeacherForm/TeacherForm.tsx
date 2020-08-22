import styled from 'styled-components';

import { PageHeader } from '../../components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const TeacherForm = () => {
  return (
    <Container>
      <PageHeader title="Que incrível que você quer dar aulas." />
    </Container>
  );
};

export default TeacherForm;

import styled from 'styled-components';

import { FadeIn, PageHeader } from '../../components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const TeacherForm = () => {
  return (
    <FadeIn orientation="down-to-up">
      <Container>
        <PageHeader title="Que incrível que você quer dar aulas." />
      </Container>
    </FadeIn>
  );
};

export default TeacherForm;

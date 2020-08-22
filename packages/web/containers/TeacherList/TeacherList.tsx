import styled from 'styled-components';

import { PageHeader, Input } from '../../components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 700px;

  @media (min-width: 700px) {
    max-width: 100%;
  }
`;

const Form = styled.form`
  margin-top: 3.2rem;

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 16px;
    position: absolute;
    bottom: -28px;
  }
`;

export const TeacherList = () => {
  return (
    <Container>
      <PageHeader title="Estes são os proffys disponíveis">
        <Form>
          <Input id="subject" label="Máteria" />
          <Input id="week_day" label="Dia da semana" />
          <Input id="time" label="Hora" />
        </Form>
      </PageHeader>
    </Container>
  );
};

export default TeacherList;

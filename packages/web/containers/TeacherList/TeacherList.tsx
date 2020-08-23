import { FadeIn, PageHeader, TeacherItem, Input } from '../../components';
import { Container, Form, MainContent } from './styled';

export const TeacherList = () => {
  return (
    <FadeIn orientation="down-to-up">
      <Container>
        <PageHeader title="Estes são os proffys disponíveis">
          <Form>
            <Input id="subject" label="Máteria" />
            <Input id="week_day" label="Dia da semana" />
            <Input id="time" label="Hora" />
          </Form>
        </PageHeader>
        <MainContent>
          <TeacherItem />
          <TeacherItem />
          <TeacherItem />
        </MainContent>
      </Container>
    </FadeIn>
  );
};

export default TeacherList;

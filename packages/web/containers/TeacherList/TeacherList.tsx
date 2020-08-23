import { FadeIn, PageHeader, TeacherItem, Input } from '../../components';
import { Container, Form, MainContent } from './styled';

export const TeacherList = () => {
  return (
    <FadeIn orientation="down-to-up">
      <Container>
        <PageHeader title="Estes são os proffys disponíveis">
          <Form>
            <Input name="subject" label="Máteria" color="primaryText" />
            <Input name="week_day" label="Dia da semana" color="primaryText" />
            <Input name="time" label="Hora" type="time" color="primaryText" />
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

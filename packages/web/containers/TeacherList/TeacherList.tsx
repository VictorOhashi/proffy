import {
  FadeIn,
  PageHeader,
  TeacherItem,
  Input,
  Select,
} from '../../components';
import { Container, Form, MainContent } from './styled';

export const TeacherList = () => {
  return (
    <FadeIn orientation="down-to-up">
      <Container>
        <PageHeader title="Estes são os proffys disponíveis">
          <Form>
            <Select
              name="materia"
              label="Máteria"
              color="primaryText"
              options={[
                { value: 1, label: 'Quimica' },
                { value: 2, label: 'Biologia' },
                { value: 3, label: 'Física' },
              ]}
            />
            <Select
              name="dia_semana"
              label="Dia da semana"
              color="primaryText"
              options={[
                { value: 0, label: 'Domingo' },
                { value: 1, label: 'Segunda-feira' },
                { value: 2, label: 'Terça-feira' },
                { value: 2, label: 'Quarta-feira' },
                { value: 2, label: 'Quinta-feira' },
                { value: 2, label: 'Sexta-feira' },
                { value: 2, label: 'Sábado' },
              ]}
            />
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

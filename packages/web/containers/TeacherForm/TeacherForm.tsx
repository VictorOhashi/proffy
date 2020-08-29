import WarningIcon from '@proffy/assets/icons/warning.svg';

import {
  FadeIn,
  Fieldset,
  PageHeader,
  Input,
  Textarea,
  Select,
  ScheduleContainer,
} from '../../components';

import { Container, Content, Footer, FooterText, SaveButton } from './styled';

export const TeacherForm = () => {
  return (
    <FadeIn orientation="down-to-up">
      <Container>
        <PageHeader
          title="Que incrível que você quer dar aulas."
          subTitle="O primeiro passo é preencher esse formulário de inscrição"
        />
        <Content>
          <Fieldset legend="Seus dados">
            <Input name="nome" label="Nome completo" />

            <Input name="avatar" label="Avatar" />

            <Input name="whatsapp" label="Whatsapp" />
            <Textarea name="Bio" label="Biografia" />
          </Fieldset>

          <Fieldset legend="Sobre a aula">
            <Select
              name="materia"
              label="Matéria"
              options={[
                { value: 1, label: 'Quimica' },
                { value: 2, label: 'Biologia' },
                { value: 3, label: 'Física' },
              ]}
            />

            <Input
              name="custo"
              label="Custo da sua hora por aula"
              type="number"
            />
          </Fieldset>

          <ScheduleContainer />

          <Footer>
            <FooterText>
              <img src={WarningIcon} alt="Aviso importante" />
              Importante! <br />
              Preencha todos os dados
            </FooterText>
            <SaveButton type="button">Salvar cadastro</SaveButton>
          </Footer>
        </Content>
      </Container>
    </FadeIn>
  );
};

export default TeacherForm;

import WarningIcon from '@proffy/assets/icons/warning.svg';
import { FadeIn, PageHeader, Input, Textarea } from '../../components';

import {
  Container,
  Content,
  Fieldset,
  Legend,
  Footer,
  FooterText,
  SaveButton,
} from './styled';

export const TeacherForm = () => {
  return (
    <FadeIn orientation="down-to-up">
      <Container>
        <PageHeader
          title="Que incrível que você quer dar aulas."
          subTitle="O primeiro passo é preencher esse formulário de inscrição"
        />
        <Content>
          <Fieldset>
            <Legend>Seus dados</Legend>

            <Input name="nome" label="Nome completo" />

            <Input name="avatar" label="Avatar" />

            <Input name="whatsapp" label="Whatsapp" />
            <Textarea name="Bio" label="Biografia" />
          </Fieldset>

          <Fieldset>
            <Legend>Sobre a aula</Legend>

            <Input name="materia" label="Matéria" />

            <Input name="custo" label="Custo da sua hora por aula" />
          </Fieldset>

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

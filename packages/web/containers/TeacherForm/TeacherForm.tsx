import WarningIcon from '@proffy/assets/icons/warning.svg';
import { FadeIn, PageHeader, Input, Textarea, Select } from '../../components';

import {
  Container,
  Content,
  Fieldset,
  Legend,
  LegendButton,
  Footer,
  FooterText,
  SaveButton,
  TimeContainer,
} from './styled';
import React from 'react';

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

            <Select
              name="materia"
              label="Matéria"
              options={[
                { value: 1, label: 'Quimica' },
                { value: 2, label: 'Biologia' },
                { value: 3, label: 'Física' },
              ]}
            />

            <Input name="custo" label="Custo da sua hora por aula" />
          </Fieldset>

          <Fieldset>
            <Legend>
              Horários disponíveis{' '}
              <LegendButton type="button">+ Novo horário</LegendButton>
            </Legend>

            <TimeContainer>
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
              <Input name="horario_inicio" label="Das" type="time" />
              <Input name="horario_fim" label="Até" type="time" />
            </TimeContainer>
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

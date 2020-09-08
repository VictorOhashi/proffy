import { memo, useCallback, useState, FormEvent } from 'react';
import { useRouter } from 'next/router';

import WarningIcon from '@proffy/assets/icons/warning.svg';

import {
  Fieldset,
  PageHeader,
  Input,
  Textarea,
  Select,
  ScheduleContainer,
  useToast,
} from '../../components';
import api from '../../services/api';

import { Container, Content, Footer, FooterText, SaveButton } from './styled';

const FormInputs = memo(() => {
  const [formState, setFormState] = useState({});
  const router = useRouter();
  const showToast = useToast();

  const handleFormSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      api
        .post('aulas', formState)
        .then(() => {
          showToast('Usuário cadastrado com sucesso', {
            type: 'success',
          });
          router.push('/');
        })
        .catch((e) => {
          showToast(e.message, { type: 'error' });
        });
    },
    [formState, router]
  );

  const handleChange = useCallback(({ name, value }) => {
    setFormState((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleChangeHorario = useCallback((horarios) => {
    setFormState((prev) => ({ ...prev, horarios }));
  }, []);

  return (
    <form onSubmit={handleFormSubmit}>
      <Fieldset legend="Seus dados">
        <Input
          name="nome"
          label="Nome completo"
          autoComplete="cc-name"
          onChange={handleChange}
        />

        <Input
          name="email"
          label="Email"
          type="email"
          autoComplete="email"
          onChange={handleChange}
        />

        <Input
          name="avatar"
          type="url"
          label="Avatar"
          onChange={handleChange}
        />

        <Input
          name="whatsapp"
          label="Whatsapp"
          type="tel"
          autoComplete="tel"
          placeholder="(00) 00000-0000"
          onChange={handleChange}
        />

        <Textarea name="bio" label="Biografia" onChange={handleChange} />
      </Fieldset>
      <Fieldset legend="Sobre a aula">
        <Select
          name="materia"
          label="Matéria"
          onChange={handleChange}
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
          inputMode="numeric"
          onChange={handleChange}
        />
      </Fieldset>
      <ScheduleContainer onChange={handleChangeHorario} />

      <Footer>
        <FooterText>
          <img src={WarningIcon} alt="Aviso importante" />
          Importante! <br />
          Preencha todos os dados
        </FooterText>
        <SaveButton type="submit">Salvar cadastro</SaveButton>
      </Footer>
    </form>
  );
});

export const TeacherForm = () => {
  return (
    <Container>
      <PageHeader
        title="Que incrível que você quer dar aulas."
        subTitle="O primeiro passo é preencher esse formulário de inscrição"
      />
      <Content>
        <FormInputs />
      </Content>
    </Container>
  );
};

export default TeacherForm;

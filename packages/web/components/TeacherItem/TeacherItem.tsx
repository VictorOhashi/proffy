import WhatsappIcon from '@proffy/assets/icons/whatsapp.svg';

import {
  ContainerItem,
  TeacherHeader,
  TeacherFooter,
  ContactButton,
} from './styled';

export const TeacherItem = () => (
  <ContainerItem>
    <TeacherHeader>
      <img
        alt="Nome professor"
        src="https://avatars1.githubusercontent.com/u/38299943?s=460&u=ff0f073baad13b512c536dfa9f7a5cd7c8863c36&v=4"
      />
      <div>
        <strong>Nome professor</strong>
        <span>Química</span>
      </div>
    </TeacherHeader>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged.
    </p>
    <p>
      It was popularised in the 1960s with the release of Letraset sheets
      containing Lorem Ipsum passages, and more recently with desktop publishing
      software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
    <TeacherFooter>
      <p>
        Preço/Hora
        <strong>R$ 80,00</strong>
      </p>
      <ContactButton type="button">
        <img src={WhatsappIcon} alt="Whatsapp" />
        Entrar em contato
      </ContactButton>
    </TeacherFooter>
  </ContainerItem>
);

export default TeacherItem;

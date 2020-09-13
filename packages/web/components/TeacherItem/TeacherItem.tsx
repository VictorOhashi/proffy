import { memo, useCallback } from 'react';
import WhatsappIcon from '@proffy/assets/icons/whatsapp.svg';

import {
  ContainerItem,
  TeacherHeader,
  TeacherFooter,
  ContactButton,
} from './styled';
import api from '../../services/api';

type TeacherItemProps = {
  aula: {
    id: number;
    materia: number;
    custo: number;
    nome: string;
    email: string;
    avatar: string;
    whatsapp: number;
    bio: string;
  };
};

export const TeacherItem: React.FC<TeacherItemProps> = memo(({ aula }) => {
  const { id, nome, materia, avatar, bio, custo, whatsapp } = aula;

  const handleClickContact = useCallback(() => {
    api.post('/conexoes', {
      id_usuario: id,
    });
  }, []);

  return (
    <ContainerItem>
      <TeacherHeader>
        <img alt="Nome professor" src={avatar} />
        <div>
          <strong>{nome}</strong>
          <span>{materia}</span>
        </div>
      </TeacherHeader>
      <p>{bio}</p>
      <TeacherFooter>
        <p>
          Preço/Hora:
          <strong>R$ {custo}</strong>
        </p>
        <ContactButton
          href={`https://wa.me/55${whatsapp}?text=Encontrei seu perfil no proffy e gostaria de ter aulas com você!`}
          target="_blank"
          onClick={handleClickContact}
        >
          <img src={WhatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </ContactButton>
      </TeacherFooter>
    </ContainerItem>
  );
});

export default TeacherItem;

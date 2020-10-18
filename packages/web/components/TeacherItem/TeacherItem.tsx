import { memo } from 'react';
import { Whatsapp } from '@proffy/assets';

import {
  ContainerItem,
  TeacherHeader,
  TeacherFooter,
  ContactButton,
} from './styled';
import api from '../../services/api';
import toCurrency from '../../utils/toCurrency';
import { Aula } from '../../containers/TeacherList';

type TeacherItemProps = {
  aula: Aula;
};

export const TeacherItem: React.FC<TeacherItemProps> = memo(({ aula }) => {
  const { id, nome, materia, avatar, bio, custo, whatsapp } = aula;

  const handleClickContact = () => {
    api.post('/conexoes', {
      id_usuario: id,
    });
  };

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
          <strong>{toCurrency(custo)}</strong>
        </p>
        <ContactButton
          href={`https://wa.me/55${whatsapp}?text=Encontrei seu perfil no proffy e gostaria de ter aulas com você!`}
          target="_blank"
          onClick={handleClickContact}
        >
          <Whatsapp title="Whatsapp" />
          Entrar em contato
        </ContactButton>
      </TeacherFooter>
    </ContainerItem>
  );
});

export default TeacherItem;

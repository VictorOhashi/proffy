import 'styled-components';
import 'styled-components/native';
import { Theme } from '@proffy/utils';

export type WebTheme = Theme & {
  elevation: Array<string>;
};

declare module 'styled-components' {
  export interface DefaultTheme extends WebTheme {}
}

declare module 'styled-components/native' {
  export interface DefaultTheme extends Theme {}
}

declare global {
  module '*.png';
  module '*.jpg';
  module '*.jpeg';
  module '*.svg';
  module '*.gif';

  type Colors = keyof Theme['colors'];
}

export type Aula = {
  id: number;
  materia: string;
  custo: number;
  nome: string;
  email: string;
  avatar: string;
  whatsapp: number;
  bio: string;
};

export type Horario = {
  dia_semana: number;
  horario_inicio: string;
  horario_fim: string;
};

export type AulasFilter = {
  horario?: string;
  materia?: string | number;
  dia_semana?: string | number;
};

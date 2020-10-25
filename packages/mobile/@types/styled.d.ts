import 'styled-components/native';

import defautlTheme from '../styles/theme';

type Theme = typeof defautlTheme;

declare module 'styled-components/native' {
  export interface DefaultTheme extends Theme {}
}

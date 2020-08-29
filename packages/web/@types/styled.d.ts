import 'styled-components';

import defautlTheme from '../styles/theme';

type Theme = typeof defautlTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

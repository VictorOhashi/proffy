import defautlTheme from '../styles/theme';

declare global {
  type Colors = keyof typeof defautlTheme.colors;
}

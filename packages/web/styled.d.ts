import 'styled-components';

import theme from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: '#F0F0F7';
      primaryLighter: '#9871F5';
      primaryLight: '#916BEA';
      primary: '#8257E5';
      primaryDark: '#774DD6';
      primaryDarker: '#6842C2';
      secundary: '#04D361';
      secundaryDark: '#04BF58';
      primaryTitle: '#FFFFFF';
      primaryText: '#D4C2FF';
      titleText: '#32264D';
      complementText: '#9C98A6';
      baseText: '#6A6180';
      lineWhite: '#E6E6F0';
      inputBackground: '#F8F8FC';
      buttonText: '#FFFFFF';
      boxBase: '#FFFFFF';
      boxFooter: '#FAFAFC';
    };
  }
}

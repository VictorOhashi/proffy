import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 50px 40px 40px 40px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const TopBar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: Archivo_700Bold;
  color: ${({ theme }) => theme.colors.primaryTitle};
  font-size: 24px;
  line-height: 32px;
  max-width: 160px;
  margin-top: 40px;
  margin-bottom: 20px;
`;

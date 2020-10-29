import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const TopBar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text``;

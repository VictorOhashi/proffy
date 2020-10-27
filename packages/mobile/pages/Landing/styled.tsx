import styled from 'styled-components/native';

export const Title = styled.Text`
  font-family: 'Poppins_400Regular';
  color: ${({ theme }) => theme.colors.primaryTitle};
  font-size: 20px;
  line-height: 30px;
  margin-top: 80px;
`;

export const TitleBold = styled.Text`
  font-family: 'Poppins_600SemiBold';
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  margin-top: 40px;
  justify-content: space-between;
`;

export const TotalConnections = styled.Text`
  font-family: 'Poppins_400Regular';
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: 12px;
  line-height: 20px;
  max-width: 140px;
  margin-top: 40px;
`;

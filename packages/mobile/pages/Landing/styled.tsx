import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  padding: 40px;
`;

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

type ButtonProps = {
  color: Colors;
};

export const Button = styled.TouchableOpacity<ButtonProps>`
  height: 150px;
  width: 48%;
  border-radius: 8px;
  padding: 24px;
  justify-content: space-between;
  background-color: ${({ theme, color }) => theme.colors[color]};
`;

export const ButtonText = styled.Text`
  font-family: 'Archivo_700Bold';
  color: ${({ theme }) => theme.colors.primaryTitle};
  font-size: 20px;
`;

export const TotalConnections = styled.Text`
  font-family: 'Poppins_400Regular';
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: 12px;
  line-height: 20px;
  max-width: 140px;
  margin-top: 40px;
`;

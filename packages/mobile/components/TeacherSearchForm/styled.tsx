import styled from 'styled-components/native';

export const SearchForm = styled.View`
  margin-bottom: 8px;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.primaryText};
  font-family: Poppins_400Regular;
`;

export const Input = styled.TextInput`
  height: 54px;
  background-color: ${({ theme }) => theme.colors.inputBackground};
  border-radius: 8px;
  justify-content: center;
  padding: 0 16px;
  margin-top: 4px;
  margin-bottom: 16px;
`;

export const InputGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const InputBlock = styled.View`
  width: 48%;
`;

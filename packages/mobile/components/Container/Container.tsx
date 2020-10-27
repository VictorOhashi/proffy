import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  padding: 40px;
`;

export default Container;

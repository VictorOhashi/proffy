import React from 'react';
import styled from 'styled-components/native';
import { ScrollView } from 'react-native';

const StyledList = styled(ScrollView)`
  margin-top: -40px;
`;

const TeacherListContainer: React.FC = ({ children }) => (
  <StyledList
    contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}
  >
    {children}
  </StyledList>
);

export default TeacherListContainer;

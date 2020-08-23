import { ReactNode } from 'react';
import styled from 'styled-components';

const Legend = styled.legend`
  font: 700 2.4rem Archivo;
  color: ${({ theme }) => theme.colors.titleText};
  margin-bottom: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 1.6rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lineWhite};
`;

const StyledFieldset = styled.fieldset`
  border: 0;
  padding: 0 2.4rem;

  & + & {
    margin-top: 6.4rem;
  }

  @media (min-width: 700px) {
    padding: 0 6.4rem;
  }
`;

type FieldsetProps = {
  legend: string | ReactNode;
};

const Fieldset: React.FC<FieldsetProps> = ({ legend, children }) => (
  <StyledFieldset>
    <Legend>{legend}</Legend>
    {children}
  </StyledFieldset>
);

export default Fieldset;

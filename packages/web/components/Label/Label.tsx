import styled from 'styled-components';

type LabelProps = {
  color: Colors;
  required: boolean;
};

const Label = styled.label<LabelProps>`
  color: ${({ theme, color }) => theme.colors[color]};
  font-size: 1.4rem;

  :after {
    ${({ required }) => required && `content: ' * '; color: red;`};
  }
`;

export default Label;

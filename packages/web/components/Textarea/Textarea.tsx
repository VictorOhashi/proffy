import { memo } from 'react';
import { TextareaBlock, Label, StyledTextarea } from './styled';
interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
  color?: Colors;
}

export const Textarea: React.FC<TextareaProps> = memo(
  ({ name, label, color, ...rest }) => {
    return (
      <TextareaBlock>
        <Label htmlFor={name} color={color}>
          {label}
        </Label>
        <StyledTextarea id={name} name={name} {...rest} />
      </TextareaBlock>
    );
  }
);

Textarea.defaultProps = {
  color: 'complementText',
};

export default Textarea;

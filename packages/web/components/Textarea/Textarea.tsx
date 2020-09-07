import { memo, useState, useCallback } from 'react';
import { TextareaBlock, Label, StyledTextarea } from './styled';

type Props = {
  name: string;
  label: string;
  color?: Colors;
  onChange: (target: { name: string; value: string | number }) => void;
};

type TextareaProps = Props &
  Omit<React.InputHTMLAttributes<HTMLTextAreaElement>, keyof Props>;

export const Textarea: React.FC<TextareaProps> = memo(
  ({ name, label, color, onChange, ...rest }) => {
    const [value, setValue] = useState('');

    const handleChange = useCallback(
      (event) => {
        const { value } = event.target;
        setValue(value);
        onChange({ name, value });
      },
      [name]
    );

    return (
      <TextareaBlock>
        <Label htmlFor={name} color={color}>
          {label}
        </Label>
        <StyledTextarea
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          {...rest}
        />
      </TextareaBlock>
    );
  }
);

Textarea.defaultProps = {
  color: 'complementText',
};

export default Textarea;

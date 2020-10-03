import { memo, useState } from 'react';

import Label from '../Label';
import { TextareaBlock, StyledTextarea } from './styled';

type Props = {
  label: string;
  color?: Colors;
  onChange: (target: { name: string; value: string | number }) => void;
};

type TextareaProps = Props &
  Omit<React.InputHTMLAttributes<HTMLTextAreaElement>, keyof Props>;

export const Textarea: React.FC<TextareaProps> = memo(
  ({ name, label, color, onChange, required, ...rest }) => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
      const { value } = event.target;
      setValue(value);
      onChange({ name, value });
    };

    return (
      <TextareaBlock>
        <Label htmlFor={name} color={color} required={required}>
          {label}
        </Label>
        <StyledTextarea
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          required={required}
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

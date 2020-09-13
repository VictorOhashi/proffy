import React, {
  memo,
  useMemo,
  useState,
  useCallback,
  useRef,
  useEffect,
} from 'react';

import matchText from '../../utils/matchText';
import { SelectBlock, Label, InputContainer, SelectInput } from './styled';
import SelectButton from './components/SelectButton';
import SelectOptions from './components/SelectOptions';
import {
  CloseOutline,
  ArrowIosDownwardOutline,
} from '@styled-icons/evaicons-outline';

export type OptionType = {
  label?: string;
  value?: string | number;
};

type Props = {
  name: string;
  label: string;
  color?: Colors;
  options?: Array<OptionType>;
  onChange: (target: { name: string; value: string | number }) => void;
};

type SelectProps = Props &
  Omit<React.InputHTMLAttributes<HTMLSelectElement>, keyof Props>;

export const Select: React.FC<SelectProps> = memo(
  ({ name, label, options, color, placeholder, onChange }) => {
    const [selectedValue, setSelectedValue] = useState<OptionType>({});
    const [inputValue, setInputValue] = useState<string>(null);
    const [expand, setExpand] = useState(false);

    const handleClickOption = useCallback(
      (option = {}) => {
        const { value, label } = option;
        setInputValue(null);
        setSelectedValue({ label: label || '', value: label && String(value) });
        onChange({ name, value });
        setExpand(false);
      },
      [name]
    );

    useEffect(() => {
      if (!expand && inputValue !== null) {
        setInputValue(null);
      }
    }, [expand]);

    const handleInputChange = useCallback((e) => {
      const { value } = e.target;
      setInputValue(value);
    }, []);

    const selectRef = useRef();
    const value = inputValue !== null ? inputValue : selectedValue.label;

    const filteredOptions = useMemo(
      () =>
        inputValue
          ? options.filter((o) => matchText(o.label, inputValue))
          : options,
      [options, inputValue]
    );

    return (
      <SelectBlock ref={selectRef}>
        <Label htmlFor={name} color={color}>
          {label}
        </Label>

        <InputContainer>
          <SelectInput
            id={name}
            name={name}
            placeholder={placeholder}
            value={value}
            onClick={() => setExpand(true)}
            onChange={handleInputChange}
            spellCheck={false}
            autoComplete="off"
          />
          {value && (
            <SelectButton onClick={() => handleClickOption()} title="Limpar">
              <CloseOutline />
            </SelectButton>
          )}
          <SelectButton
            aria-expanded={expand}
            onClick={() => setExpand((e) => !e)}
            title="Mostrar opções"
          >
            <ArrowIosDownwardOutline />
          </SelectButton>
        </InputContainer>

        {expand && (
          <SelectOptions
            selectRef={selectRef}
            options={filteredOptions}
            onClick={handleClickOption}
            selectedValue={selectedValue.value}
            setExpand={setExpand}
          />
        )}
      </SelectBlock>
    );
  }
);

Select.defaultProps = {
  color: 'complementText',
  placeholder: 'Selecione uma opção',
  defaultValue: '',
  options: [],
};

export default Select;

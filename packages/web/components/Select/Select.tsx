import React, {
  memo,
  useMemo,
  useState,
  useCallback,
  useRef,
  useEffect,
} from 'react';

import {
  CloseOutline,
  ArrowIosDownwardOutline,
} from '@styled-icons/evaicons-outline';

import Label from '../Label';
import { SelectBlock, InputContainer, SelectInput } from './styled';

import useClickAway from '../../hooks/useClickAway';
import matchText from '../../utils/matchText';

import SelectButton from './components/SelectButton';
import SelectOptions from './components/SelectOptions';

export type OptionType = {
  label?: string;
  value?: string | number;
};

type SelectProps = {
  name: string;
  label?: string;
  initialValue?: string | number;
  placeholder?: string;
  color?: Colors;
  options?: Array<OptionType>;
  required?: boolean;
  onChange: (target: { name: string; value: string | number }) => void;
};

export const Select: React.FC<SelectProps> = memo(
  ({
    name,
    initialValue,
    label,
    options,
    color,
    placeholder,
    onChange,
    required,
  }) => {
    const selectRef = useRef();
    const [selectedValue, setSelectedValue] = useState<OptionType>({
      label: '',
      value: null,
    });
    const [inputValue, setInputValue] = useState<string>(null);
    const [expand, setExpand] = useState(false);
    useClickAway(() => setInputValue(null), selectRef);

    useEffect(() => {
      if (initialValue !== undefined && selectedValue.value === null) {
        const initial = options.find((option) => option.value === initialValue);
        initial && setSelectedValue(initial);
      }
    }, [options]);

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

    const handleInputChange = useCallback((e) => {
      const { value } = e.target;
      setInputValue(value);
    }, []);

    const handleKeyDown = useCallback((e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
      }
    }, []);

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
        <Label htmlFor={name} color={color} required={required}>
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
            onKeyDown={handleKeyDown}
            spellCheck={false}
            autoComplete="off"
            required={required}
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
  options: [],
};

export default Select;

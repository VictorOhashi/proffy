import { memo, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import useClickAway from '../../../hooks/useClickAway';
import { OptionType } from '../Select';

const Container = styled.dialog`
  display: flex;
  flex-direction: column;
  z-index: 10;
  position: absolute;
  max-height: 20rem;
  width: 100%;
  border-radius: 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors.lineWhite};
  background-color: ${({ theme }) => theme.colors.inputBackground};
  margin-top: 0.5rem;
  overflow: hidden;
  overflow-y: auto;
  ${({ theme }) => theme.elevation[1]};

  ::-webkit-scrollbar {
    width: 0.6rem;
  }

  ::-webkit-scrollbar-track {
    position: absolute;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 0.8rem;
    background: ${({ theme }) => theme.colors.primary};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.primaryDarker};
  }
`;

type OptionProps = {
  selected?: boolean;
};

const SelectOption = styled.button<OptionProps>`
  display: flex;
  padding: 0.8rem;
  width: 100%;
  background: none;
  border: 0;
  outline: 0;
  cursor: pointer;

  :nth-child(2n) {
    background-color: ${({ theme }) => theme.colors.background};
  }

  :hover:enabled,
  :focus:enabled {
    background-color: ${({ theme }) => theme.colors.primaryText};
  }

  ${({ selected, theme }) =>
    selected &&
    `background-color: ${theme.colors.primaryLighter} !important;
    color: ${theme.colors.lineWhite}
    `};
`;

type SelectOptions = {
  selectedValue: string;
  onClick: (option: OptionType) => void;
  options: Array<OptionType>;
  setExpand: (expand: boolean) => void;
  selectRef: any;
};

export const SelectOptions: React.FC<SelectOptions> = memo(
  ({ selectRef, options, onClick, selectedValue, setExpand }) => {
    const [refs, setRefs] = useState([]);
    useClickAway(() => setExpand(false), selectRef);

    useEffect(() => {
      const handleKey = (e) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
          e.preventDefault();
        }
      };
      window.addEventListener('keydown', handleKey);
      return () => window.removeEventListener('keydown', handleKey);
    }, []);

    useEffect(() => {
      if (refs.length > 0) {
        const firstElement = refs[0];
        firstElement.focus();
      }
    }, [refs]);

    const handleRefs = useCallback(
      (ref) => {
        if (ref && refs.length < options.length) {
          setRefs((prev) => [...prev, ref]);
        }
      },
      [refs, options]
    );

    const handleKeyDown = useCallback(
      (e, index) => {
        const maxLength = options.length - 1;

        const focusElement = (element: number) => {
          const elementToFocus = refs[element];
          elementToFocus.focus();
        };

        if (e.key === 'ArrowDown') {
          index === maxLength ? focusElement(0) : focusElement(index + 1);
        } else if (e.key === 'ArrowUp') {
          index === 0 ? focusElement(maxLength) : focusElement(index - 1);
        }
      },
      [options, refs]
    );

    return (
      <Container open>
        {options.length > 0 ? (
          options.map((option, i) => {
            return (
              <SelectOption
                ref={handleRefs}
                key={option.value}
                selected={option.value == selectedValue}
                onClick={() => onClick(option)}
                type="button"
                onKeyDown={(e) => handleKeyDown(e, i)}
              >
                {option.label}
              </SelectOption>
            );
          })
        ) : (
          <SelectOption disabled type="button">
            Nenhuma opção encontrada
          </SelectOption>
        )}
      </Container>
    );
  }
);

export default SelectOptions;

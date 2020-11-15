import React, { useState } from 'react';

import DateTimePicker from '@react-native-community/datetimepicker';
import { Input, InputText, InputBlock, Label, InputBlockProps } from './styled';
import { getTime } from '../../utils/getTime';

type InputProps = InputBlockProps & {
  label?: string;
  onChange: (value: string) => void;
};

const TimeInput: React.FC<InputProps> = ({ label, grid, onChange }) => {
  const [dateValue, setDateValue] = useState(new Date(0, 0));
  const [showDate, setShowDate] = useState(false);

  const handleChangeDate = (date: Date | undefined) => {
    setShowDate(false);
    if (date) {
      setDateValue(date);
      onChange(getTime(date));
    }
  };

  return (
    <InputBlock grid={grid}>
      <Label>{label}</Label>
      {showDate && (
        <DateTimePicker
          value={dateValue}
          mode="time"
          is24Hour
          display="default"
          onChange={(_, date) => handleChangeDate(date)}
        />
      )}
      <Input onPress={() => setShowDate(true)}>
        <InputText>{getTime(dateValue)}</InputText>
      </Input>
    </InputBlock>
  );
};

export default TimeInput;

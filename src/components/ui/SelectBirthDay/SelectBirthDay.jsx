import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';

import './SelectBirthDay.css';

function CustomDateFormat({clientValue, updateAgeValue}) {
  const [value, setValue] = React.useState(dayjs(clientValue ? clientValue.split('.').reverse().join('-') : '2000-06-19'));

  const changeHandler = value => {
    setValue(value);
    let date = new Date(value);
    const finalDate = [date.getDate(), date.getMonth() + 1, date.getFullYear()].join('.').split('T')[0];
    updateAgeValue(finalDate);
  }
  return (
    <ScopedCssBaseline>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DateField']}>
          <DateField
            value={value}
            disableFuture
            onChange={(newValue) => changeHandler(newValue)}
            format="DD.MM.YYYY"
          />
        </DemoContainer>
      </LocalizationProvider>
    </ScopedCssBaseline>
  );
}

export default CustomDateFormat;
import { useState } from 'react';
import PhoneInput from 'react-phone-number-input';

function Phone({clientValue, updatePhoneValue}) {
  const [value, setValue] = useState(clientValue ? clientValue : '');

  const changeHandler = value => {
    setValue(value);
    updatePhoneValue(value);
  }
  return (
    <PhoneInput
      placeholder="+44 112 334 5678"
      value={value}
      onChange={changeHandler}/>
  )
}

export default Phone
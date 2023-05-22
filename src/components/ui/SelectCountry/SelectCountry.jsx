import React, { useState, useMemo, useEffect } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';

import './SelectCountry.css';

function CountrySelector({clientValue, updateСountryValue}) {
    const [value, setValue] = useState('');
    const options = useMemo(() => countryList().getData(), []);
    useEffect(()=>{
      setValue(clientValue ? {value: countryList().getValue(clientValue), label: clientValue} : '');
    },[]);

    const changeHandler = value => {
      setValue(value);
      updateСountryValue(value.label);
    }

    return <Select options={options} value={value} onChange={changeHandler} />
}

export default CountrySelector
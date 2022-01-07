import React from 'react';

import { FormInputContainer, FormInputLabel, GroupContainer } from './FormInput.styles';

const FormInput = ({ handleChange, label, ...rest }) => {
  return (
    <GroupContainer>
      <FormInputContainer onChange={handleChange} {...rest} />
      {label ? (
        <FormInputLabel htmlFor={rest.name ? rest.name : ''} className={`${rest.value.length ? 'shrink' : ''}`}>
          {label}
        </FormInputLabel>
      ) : null}
    </GroupContainer>
  );
};

export default FormInput;

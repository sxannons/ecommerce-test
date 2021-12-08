import React from 'react';

import './FormInput.styles.scss';

const FormInput = ({ handleChange, label, ...rest }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...rest} />
      {label ? (
        <label htmlFor={rest.name ? rest.name : ''} className={`${rest.value.length ? 'shrink' : ''} form-input-label`}>
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;

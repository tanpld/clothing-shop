import React from 'react';

import './styles.scss';

const FormInput = ({ handleChange, label, value, ...props }) => (
  <div className="form-group">
    <input className="form-input" onChange={handleChange} {...props} />
    {label ? (
      <label className={`${value.length ? 'shrink' : ''} form-input-label`}>
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;

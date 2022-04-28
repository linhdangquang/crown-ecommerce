import React from 'react';
import { FormInputLabel, Group, Input } from './form-input.styles';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />

      {label && (
        <FormInputLabel
          shrink={otherProps.value.length}
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;

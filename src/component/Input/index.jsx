import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

// core
import {
  maxLength as lengthValidation,
  passwordFormat,
  lengthBetween,
} from '../../helpers/validation';

//Components
import InputWrapper from './InputWrapper';

// redux
import { resetErrorMessage, setErrorMessage as setError } from '../../redux/actions';

// styles
import './styles.scss';

const TextInput = (props) => {
  const {
    className,
    description,
    disabled,
    id,
    label,
    name,
    onBlur,
    onChange,
    onClear,
    onFocus,
    value,
    maxLength,
    title,
    validate,
    password,
    ...restProps
  } = props;
  const dispatch = useDispatch();
  const [focused, setFocused] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const handleFocus = () => {
    setFocused(true);
    onFocus && onFocus();
  };

  const handleBlur = (e) => {
    setErrorMessage(null);
    dispatch(resetErrorMessage());
    setFocused(false);
    validateFunc(e);
    onBlur && onBlur();
  };

  const validateFunc = (e) => {
    const { target } = e;

    const valueValidation = validate.map((data) => {
      if(target.value.length > 0){
      if (data === 'maxLength') {
        return lengthValidation(target.value, maxLength);
      }

      if (data === 'passwordFormat') {
        return passwordFormat(target.value);
      }

      if (data === 'lengthBetween') {
        return lengthBetween(target.value, 8, 16);
      }
      return true;
    }
    });
    (valueValidation || []).map((data)=>{
      if(data){
      dispatch(setError(true));
      }
    })

    setErrorMessage(valueValidation);
  };

  return (
    <InputWrapper
      className={className}
      description={description}
      disabled={disabled}
      errorMessage={errorMessage}
      focused={focused}
      id={id}
      label={label}
      onClear={onClear}
      type="textinput"
      value={value}
      maxLength={maxLength}
      title={title}
    >
      <input
        type={password ? 'password' : 'text'}
        disabled={disabled}
        onFocus={handleFocus}
        onChange={(e) => {
          onChange(e);
        }}
        onBlur={(e) => handleBlur(e)}
        name={name}
        value={value}
        {...restProps}
      />
    </InputWrapper>
  );
};

export default TextInput;

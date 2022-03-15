import React, { useState } from 'react';
import cx from 'classnames';
import {useDispatch} from 'react-redux';

// core
import {  phoneNumber } from '../../helpers/validation';

//Components
import InputWrapper from './InputWrapper';
import { Paragraph, Span } from '../Typography';

// redux
import { resetErrorMessage, setErrorMessage  as setError} from '../../redux/actions';

// styles
import './styles.scss';

const PhoneInput = (props) => {
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
    title,
    validate,
    ...restProps
  } = props;

  const [focused, setFocused] = useState(false);
  const [areaCode, setAreaCode] = useState(false);
  const [areaId, setAreaId] = useState('+62');
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const handleFocus = () => {
    setFocused(true);
    setAreaCode(false);
    onFocus && onFocus();
  };

  const handleBlur = (e) => {
    dispatch(resetErrorMessage());
    setFocused(false);
    validateFunc(e)
    onBlur && onBlur();
  };

  const handleAreaId = (id) => {
    setAreaId(id);
    setAreaCode(!areaCode);
  };

  const validateFunc = (e) => {
    const { target } = e;

    const valueValidation = validate.map((data) => {
      if (data === 'phoneNumber') {
        return phoneNumber(title, target.value);
      }
    });
    (valueValidation || []).length > 0 && dispatch(setError(true));

    setErrorMessage(valueValidation);
  };

  return (
    <InputWrapper
      className="phone-input"
      description={description}
      disabled={disabled}
      errorMessage={errorMessage}
      focused={focused}
      id={id}
      label={label}
      onClear={onClear}
      type="phoneinput"
      value={value}
      title={title}
    >
      <div className="area-code" onClick={() => setAreaCode(!areaCode)}>
        <Span lowEmphasis>{areaId}</Span>
        <span className={cx('icon-click', { rotate: areaCode }, { normal: !areaCode })} />
      </div>
      <div className="input-code">
        <label className={(value || '').length > 0 ? 'active' : ''}>
          <Paragraph lowEmphasis>{label}</Paragraph>
        </label>
        <input
          disabled={disabled}
          onFocus={handleFocus}
          onChange={(e) => {
            onChange(e);
          }}
          onBlur={handleBlur}
          name={name}
          value={value}
          {...restProps}
        />
      </div>
      {areaCode && (
        <div className="area-code-wrapper">
          <Paragraph onClick={() => handleAreaId('+62')}>+62</Paragraph>
          <Paragraph onClick={() => handleAreaId('+63')}>+63</Paragraph>
        </div>
      )}
    </InputWrapper>
  );
};

export default PhoneInput;

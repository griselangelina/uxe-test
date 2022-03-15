import React from 'react';
import cx from 'classnames';

import { Span, Paragraph } from '../Typography';
//styles
import './styles.scss';

const InputWrapper = (props) => {
  const {
    children,
    className,
    description,
    id,
    label,
    maxLength,
    value,
    title,
    errorMessage,
  } = props;


  const labelClassname = cx({
    active: (value || '').length > 0,
  });


  return (
    <div className={cx('input-forms', className)}>
      <div className="input-header">
        <Span medium="true">{title}</Span>
        {maxLength && (
          <Span lowEmphasis>
            {(value || '').length}/{maxLength}
          </Span>
        )}
      </div>
      <div className={cx('input-wrapper', className)}>
        {children}

        {label && (
          <label htmlFor={id} className={labelClassname}>
            <Paragraph lowEmphasis>{label}</Paragraph>
          </label>
        )}
      </div>
      {description && !errorMessage && <Paragraph lowEmphasis>{description}</Paragraph>}

      {errorMessage &&
        (errorMessage || []).map((value) => (
          <Paragraph alert medium>
            {value}
          </Paragraph>
        ))}
    </div>
  );
};

export default InputWrapper;

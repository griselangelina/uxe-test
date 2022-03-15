import React from 'react';
import cn from 'classnames';
import { Span } from '../Typography';

// styles
import './styles.scss';

function Label(props) {
  const { regular, alert, children } = props;
  // Props
  return (
    <div className={cn('label', {regular, alert})}>
      <Span>{children}</Span>
    </div>
  );
}

export default Label;

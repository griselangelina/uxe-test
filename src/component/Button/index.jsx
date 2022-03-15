import React from 'react';
import cn from 'classnames';

// styles
import './styles.scss';

function Button(props) {
  const { children, ghost, onClick } = props;
  // Props
  return (
    <button className={cn('button', {ghost})} onClick={onClick}>
      <span className="content">{children}</span>
    </button>
  );
}

export default Button;

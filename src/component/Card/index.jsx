import React, { createContext } from 'react';
import cn from 'classnames';
import { Paragraph, Span } from '../Typography';

// styles
import './styles.scss';

function Card(props) {
  const { className, maxHeight, padding, children, headerImage } = props;
  const paddingName = padding === 'medium' ? 'padding-medium' : 'padding-small';
  // Props
  return (
    <div className={cn('card', className)} style={{ maxHeight }}>
      <div className="card-header">
        <div
          className="banner-content"
          style={{
            backgroundImage: `url('${headerImage}')`,
          }}
          role="img"
        />{' '}
      </div>
      <div className={cn('card-body', paddingName)}>{children}</div>
    </div>
  );
}

export default Card;

import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import { Span } from '../Typography';

// styles
import './styles.scss';

export const ANIMATION_DURATION = 225;

function Toast(props) {
  const { message, open, timeout, onClose } = props;

  const [isAttached, attachElement] = useState(open);
  const [cname, setClassName] = useState({
    visible: false,
  });

  const show = () => {
    attachElement(true);

    // Wait dom attached
    setTimeout(() => {
      setClassName({ ...cname, visible: true });
    }, 50);

    setTimeout(hide, Math.max(0, timeout));
  };

  const hide = () => {
    setClassName({
      ...cname,
      animating: true,
    });

    setTimeout(() => {
      setClassName({
        ...cname,
        animating: false,
        visible: false,
      });
      onClose && onClose();
      attachElement(false);
    }, ANIMATION_DURATION);
  };

  useEffect(() => {
    if (open === cname.visible) {
      return;
    } else if (open) {
      show();
    } else {
      hide();
    }
  }, [open]);
  return (
    <div className={cn('toast', cname)}>
      <Span className="message">
        {message}
      </Span>
    </div>
  );
}

export default Toast;

import React from 'react';
import cn from 'classnames';

// styles
import './styles.scss';

const Typography = (props) => {
  const {
    wrapper,
    className,
    lowEmphasis,
    highEmphasis,
    activity,
    alert,
    bold,
    medium,
    strikethrough,
    spacing,
    small,
  } = props;
  const Wrapper = wrapper;
  const emphasis = lowEmphasis
    ? { 'low-emphasis': lowEmphasis }
    : { 'high-emphasis': highEmphasis };
  const fontClassName = cn([
    className,
    emphasis,
    {
      activity,
      alert,
      bold,
      medium,
      strikethrough,
      small,
    },
    'input-font',
  ]);

  return <Wrapper style={{ letterSpacing: spacing }} className={fontClassName} {...props} />;
};

const Body = ({ wrapper, ...restProps }) => {
  return <Typography {...restProps} wrapper={wrapper} />;
};

/** Paragraph is body text with a `p` as a wrapper. */
const Paragraph = (props) => <Body {...props} wrapper="p" />;

/** Span is body text with a `span` as a wrapper. */
const Span = (props) => <Body {...props} wrapper="span" />;

export { Paragraph, Span };

import React from 'react';
import classes from './Button.module.scss';
function Button({ color, children }) {
  const style =
    classes.btn +
    (color === 'blue'
      ? ' ' + classes.blue
      : color === 'grey'
      ? ' ' + classes.grey
      : ' ');

  return <button className={style}>{children}</button>;
}

export default Button;

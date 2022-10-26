import React from 'react';
import classes from './Button.module.scss';
function Button({ color, children }) {
  return (
    <button
      className={
        classes.btn +
        (color === 'blue'
          ? ' ' + classes.blue
          : color === 'grey'
          ? ' ' + classes.grey
          : ' ')
      }
    >
      {children}
    </button>
  );
}

export default Button;

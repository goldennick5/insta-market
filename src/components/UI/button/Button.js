import React from 'react';
import s from './Button.module.scss';

function Button(props) {
  return <button className={s[props.color]}>{props.name}</button>;
}

export default Button;

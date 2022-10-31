import React from 'react';
import s from './Button.module.scss';

function Button(props) {

  return (
    <button className={`${s[props.color]} ${s[props.class]}`}
            onClick={props.sumStepUpAndDisableBtn}
            disabled={props.disable}>
      {props.name}
    </button>
  );
}

export default Button;

import React from 'react';
import s from './Button.module.scss';

function Button(props) {

    const handleStepsUp = () => {
        props.sumStepUpAndDisableBtn();
    }

    return (
        <button className={`${s[props.class]} ${s[props.color]} ${props.finish && s[props.finishedColor]}`}
                onClick={() => {handleStepsUp()}}
                disabled={props.disable}>
            {props.name}
            {props.finish && <img className={s.btnGreyImg} src={props.loadingImg} alt="loading"/>}
        </button>
    );
}

export default Button;

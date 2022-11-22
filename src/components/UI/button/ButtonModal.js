import React from 'react';
import s from './ButtonModal.module.scss';

const ButtonModal = (props) => {
    return (
        <button className={`${s[props.color]}`}
                onClick={() => (props.addCard() || props.handleModal(false))}>
            {props.name}
        </button>
    );
};

export default ButtonModal;
import React from 'react';
import s from './CardsModal.module.scss';

const CardsModal = ({showModal}) => {

    return (
        <div className={showModal ? `${s.modal__container} ${s.active}` : s.modal__container}>
            <div className={s.modal__container__content}>
                wwegqdwefwe
            </div>
        </div>
    );
};

export default CardsModal;
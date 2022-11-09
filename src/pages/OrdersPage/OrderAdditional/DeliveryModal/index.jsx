import React from 'react';
import s from './DeliveryModal.module.scss';
import exit from '../../../../assets/images/OrdersPage/exitModal.svg';
const DeliveryModal = ({ showModal, closeModal }) => {
  return (
    <div
      className={
        showModal ? `${s.modal__container} ${s.active}` : s.modal__container
      }
    >
      <div className={s.modal__container__content}>
        <div className={s.modal__exit} onClick={closeModal}>
          <img src={exit} alt="exitBtn" />
        </div>
      </div>
    </div>
  );
};

export default DeliveryModal;

import React from 'react';
import noOrderImg from '../../../assets/images/noOrder.jpg';
import s from './NoOrder.module.scss';
function NoOrder() {
  return (
    <div className={s.noOrderContainer}>
      <img src={noOrderImg} alt="noOrderImg" />
      <p className={s.noOrderText}>Вы еще не сделали ни одного заказа</p>
    </div>
  );
}

export default NoOrder;

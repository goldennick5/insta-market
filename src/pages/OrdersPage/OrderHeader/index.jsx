import React from 'react';
import o from './OrderHeader.module.scss';

function OrderHeader(props) {
  return (
    <div className={o.order__header}>
      <div className={o.order__text}>Мои заказы</div>
      <div className={o.order__btn}>
        <button className={o.status__Btn1}>
          <div className={o.status__text}>Текущие</div>
          <div className={o.status__number1}>{props.current}</div>
        </button>
        <button className={o.status__Btn2}>
          <div className={o.status__text}>Завершенные</div>
          <div className={o.status__number2}>{props.finish}</div>
        </button>
      </div>
    </div>
  );
}

export default OrderHeader;

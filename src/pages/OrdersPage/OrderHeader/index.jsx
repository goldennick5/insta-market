import React, { useState } from 'react';
import o from './OrderHeader.module.scss';

function OrderHeader(props) {
  const [active, setActive] = useState(true);

  const changeStyle = () => {
    setActive(!active);
  };

  return (
    <div className={o.order__header}>
      <div className={o.order__text}>Мои заказы</div>
      <div className={o.order__btn}>
        <button
          className={o.status__Btn1}
          onClick={() => (props.doFilter(0), changeStyle())}
          style={{
            background: active ? '#458cf5' : '#fafafa',
            color: active ? '#ffffff' : '#415273',
          }}
        >
          <div className={o.status__text}>Текущие</div>
          <div
            className={o.status__number1}
            style={{
              background: active ? '#ffffff' : '#f2f2f5',
              color: active ? '#458cf5' : '#415273',
            }}
          >
            {props.current}
          </div>
        </button>
        <button
          className={o.status__Btn2}
          onClick={() => (props.doFilter(1), changeStyle())}
          style={{
            background: active ? '#fafafa' : '#458cf5',
            color: active ? '#415273' : '#ffffff',
          }}
        >
          <div className={o.status__text}>Завершенные</div>
          <div
            className={o.status__number2}
            style={{
              background: active ? '#f2f2f5' : '#ffffff',
              color: active ? '#415273' : '#458cf5',
            }}
          >
            {props.finish}
          </div>
        </button>
      </div>
    </div>
  );
}

export default OrderHeader;

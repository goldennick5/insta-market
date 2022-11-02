import React from 'react';
import o from './OrderAdditional.module.scss';
function OrderAdditional(props) {
  return (
    <div className={o.additionalInfo}>
      <div className={o.additionalInfo__tab}>
        <span className={o.tab__btn}>
          <div>icon</div>
          <div>Скачать чек</div>
        </span>
        <span className={o.tab__btn}>
          <div>icon</div>
          <div>Отправить чек</div>
        </span>
        <span className={o.tab__btn}>
          <div>icon</div>
          <div>Статус доставки</div>
        </span>
        <span className={o.tab__btn}>
          <div>icon</div>
          <div>Отменить заказ</div>
        </span>
      </div>
      <div className={o.additionalInfo__address}>
        <div className={o.additionalInfo__wrapper}>
          <p>Продавец:</p>
          <p>{props.name}</p>
        </div>
        <div className={o.additionalInfo__wrapper}>
          <p>Время покупки:</p>
          <p>{props.date}</p>
        </div>
        <div className={o.additionalInfo__wrapper}>
          <p>Адрес доставки:</p>
          <p>{props.street}</p>
        </div>
        <div className={o.additionalInfo__wrapper}>
          <p>Метод оплаты:</p>
          <p>{props.paymentType}</p>
        </div>
      </div>
      {/* <div className={o.additionalInfo__items}>{props.order.items}</div> */}
    </div>
  );
}

export default OrderAdditional;

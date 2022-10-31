import React from 'react';
import o from './OrderItem.module.scss';
import arrivedIcon from '../../../assets/images/arrivedIcon.svg';
import arrowDown from '../../../assets/images/arrowDown.svg';
// import DataOrder from './orders.json';

function OrderItem(props) {
  //   setTimeout(() => {
  //     {
  //       props.uploadData([DataOrder]);
  //     }
  //   }, 3000);

  return (
    <div className={o.order__item}>
      <div className={o.item__description}>
        <div className={o.item__img}></div>
        <div className={o.item__content}>
          <div className={o.item__name}>{props.order.name}</div>
          <div className={o.item__details}>{props.order.date}</div>
        </div>
      </div>
      <div className={o.item__description}>
        <div className={o.item__delivery}>{props.order.deliveryStatus}</div>
        <div className={o.item__deliveryIcon}>
          <img src={arrivedIcon} alt="" />
        </div>
        <div className={o.item__price}>{props.order.price}</div>
        <div className={o.item__iconNext}>
          <img src={arrowDown} alt="" />
        </div>
      </div>
    </div>
  );
}

export default OrderItem;

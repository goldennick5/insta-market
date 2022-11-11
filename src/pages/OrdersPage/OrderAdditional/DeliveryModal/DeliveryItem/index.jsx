import React from 'react';
import s from './DeliveryItem.module.scss';
import arrowDelivery from '../../../../../assets/images/OrdersPage/arrowDelivery.svg';
const DeliveryItem = (props) => {
  return (
    <div className={s.tracking}>
      <div className={s.tracking__left}>
        <div className={s.tracking__title}>{props.track.date}</div>
        <div className={s.tracking__subtitle}>{props.track.time}</div>
      </div>
      <div className={s.tracking__steps}>
        {/* <div className={s.line}></div> */}
        <div className={s.circle}>
          <img className={s.arrow} src={arrowDelivery} alt="arrow"></img>
        </div>
        <div className={s.line}></div>
      </div>

      <div className={s.tracking__right}>
        <div className={s.tracking__title}>
          {props.track.operationPostTypeName}
        </div>
        <div className={s.tracking__subtitle}>{props.track.townName}</div>
      </div>
    </div>
  );
};

export default DeliveryItem;

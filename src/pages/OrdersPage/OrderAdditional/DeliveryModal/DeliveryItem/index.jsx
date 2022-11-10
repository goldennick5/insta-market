import React from 'react';
import s from './DeliveryItem.module.scss';
import step from '../../../../../assets/images/OrdersPage/step.svg';
const DeliveryItem = (props) => {
  return (
    <div className={s.tracking}>
      <div className={s.tracking__left}>
        <div className={s.tracking__title}>{props.track.date}</div>
        <div className={s.tracking__subtitle}>{props.track.time}</div>
      </div>
      <div className={s.tracking__steps}>
        <div className={s.vl}></div>
        <img src={step} alt="step" />
        <div className={s.vl}></div>
      </div>
      <div className={s.tracking__right}>
        {/* <div className={s.tracking__title}>{props.name}</div> */}
        <div className={s.tracking__title}>
          {props.track.operationPostTypeName}
        </div>
        <div className={s.tracking__subtitle}>{props.track.townName}</div>
      </div>
    </div>
  );
};

export default DeliveryItem;

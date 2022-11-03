import React from 'react';
import o from './OrderAdditionalItem.module.scss';
import imageItem from '../../../../assets/images/item.svg';
function OrderAdditionalItem(props) {
  return (
    <div className={o.additionalInfo__items}>
      <div className={o.additionalInfo__itemsWrapper}>
        <img src={imageItem} alt="" />
        <div className={o.items__content}>
          <div className={o.items__name}>{props.item.name}</div>
          <div className={o.items__count}>
            {props.item.count} ₸ x {props.item.count} шт.
          </div>
        </div>
        <div className={o.items__price}></div>
      </div>
    </div>
  );
}

export default OrderAdditionalItem;

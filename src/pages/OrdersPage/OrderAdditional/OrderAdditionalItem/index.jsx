import React from 'react';
import o from './OrderAdditionalItem.module.scss';
import imageItem from '../../../../assets/images/item.svg';
function OrderAdditionalItem(props) {
  const multiplyPrice = props.item.price * props.item.count;

  return (
    <div className={o.additionalInfo__items}>
      <div className={o.additionalInfo__itemsWrapper}>
        <div className={o.additionalInfo__leftSide}>
          <img className={o.additionalInfo__img} src={imageItem} alt="" />
          <div className={o.items__content}>
            <div className={o.items__name}>{props.item.name}</div>
            <div className={o.items__count}>
              {props.item.price} ₸ x {props.item.count} шт.
            </div>
          </div>
        </div>

        <div className={o.items__price}>{multiplyPrice} ₸</div>
      </div>
    </div>
  );
}

export default OrderAdditionalItem;

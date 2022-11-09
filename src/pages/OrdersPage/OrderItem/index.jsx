import React, { useState, useEffect } from 'react';
import o from './OrderItem.module.scss';
import arrivedIcon from '../../../assets/images/arrivedIcon.svg';
import arrowDown from '../../../assets/images/arrowDown.svg';
import arrowUp from '../../../assets/images/arrowUp.svg';
import OrderAdditional from '../OrderAdditional';

const OrderItem = ({
  order: {
    name,
    image,
    date,
    additionalInfo,
    additionalInfo: {
      address: { city, street, house },
      paymentType,
      deliveryPrice,
    },
    price,
    deliveryStatus,
    account,
  },
  toggle,
}) => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  useEffect(() => {
    setShow(false);
  }, [toggle]);

  return (
    <div className={o.order__container}>
      <div className={o.order__item}>
        <div className={o.item__description}>
          <div className={o.item__img}>
            <img className={o.item__img} src={image} alt="" />
          </div>
          <div className={o.item__content}>
            <div className={o.item__name}>
              {name}&nbsp;
              <p>({account})</p>
            </div>
            <div className={o.item__details}>{date}</div>
          </div>
        </div>
        <div className={o.item__description}>
          <div className={o.item__delivery}>{deliveryStatus}</div>
          <div className={o.item__deliveryIcon}>
            <img src={arrivedIcon} alt="" />
          </div>
          <div className={o.item__price}>{price} ₸</div>

          <span onClick={toggleShow} className={o.item__iconNext}>
            <img src={show ? arrowUp : arrowDown} alt="" />
          </span>
       
        </div>
      </div>

      {show && (
        <OrderAdditional
          name={name}
          image={image}
          date={date}
          account={account}
          price={price}
          additionalInfo={additionalInfo}
          city={city}
          street={street}
          house={house}
          paymentType={paymentType}
          deliveryPrice={deliveryPrice}
        />
      )}
    </div>
  );
};

export default OrderItem;

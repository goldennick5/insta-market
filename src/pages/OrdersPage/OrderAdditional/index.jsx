import React, { useState } from 'react';
import o from './OrderAdditional.module.scss';
import delivery from '../../../assets/images/delivery.svg';
import download from '../../../assets/images/download.svg';
import send from '../../../assets/images/send.svg';
import status from '../../../assets/images/status.svg';
import cancel from '../../../assets/images/cancel.svg';
import OrderAdditionalItem from './OrderAdditionalItem';
import DeliveryModal from './DeliveryModal';

function OrderAdditional(props) {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className={o.additionalInfo}>
      <div className={o.additionalInfo__tab}>
        <span className={o.tab__btn}>
          <img className={o.tab__img} src={download} alt="" />
          <div>Скачать чек</div>
        </span>
        <span className={o.tab__btn}>
          <img className={o.tab__img} src={send} alt="" />
          <div>Отправить чек</div>
        </span>
        <div className={o.tab__btn} onClick={handleModal}>
          <img className={o.tab__img} src={status} alt="" />
          <div>Статус доставки</div>
        </div>
        <span className={o.tab__btn}>
          <img className={o.tab__img} src={cancel} alt="" />
          <div>Отменить заказ</div>
        </span>
      </div>
      <hr></hr>
      <div className={o.additionalInfo__address}>
        <div className={o.additionalInfo__addressWrapper}>
          <p>Продавец:</p>
          <p>
            {props.name} ({props.account})
          </p>
        </div>
        <div className={o.additionalInfo__addressWrapper}>
          <p>Время покупки:</p>
          <p>{props.date}</p>
        </div>
        <div className={o.additionalInfo__addressWrapper}>
          <p>Адрес доставки:</p>
          <p>
            {props.street} {props.house}
          </p>
        </div>
        <div className={o.additionalInfo__addressWrapper}>
          <p>Метод оплаты:</p>
          <p>{props.paymentType}</p>
        </div>
      </div>
      <hr></hr>
      {props.additionalInfo.items.map((item) => (
        <OrderAdditionalItem item={item} />
      ))}
      <hr></hr>
      <div className={o.additionalInfo__delivery}>
        <div className={o.additionalInfo__itemsWrapper}>
          <div className={o.additionalInfo__leftSide}>
            <img className={o.additionalInfo__img} src={delivery} alt="" />
            <div className={o.items__content}>
              <div className={o.items__name}>Доставка</div>
              <div className={o.items__count}>
                Адресная доставка: город: {props.city}, {props.street}{' '}
                {props.house}
              </div>
            </div>
          </div>
          <div className={o.items__price}>{props.deliveryPrice} ₸</div>
        </div>
      </div>
      <DeliveryModal
        showModal={showModal}
        onClick={handleModal}
        closeModal={() => setShowModal(false)}
      />
    </div>
  );
}

export default OrderAdditional;

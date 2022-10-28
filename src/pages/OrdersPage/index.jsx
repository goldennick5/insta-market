import o from './OrdersPage.module.scss';
import orderImg from '../../assets/images/order-img.jpg';
import arrivedIcon from '../../assets/images/arrivedIcon.svg';
import arrowDown from '../../assets/images/arrowDown.svg';
const OrdersPage = () => {
  return (
    <div className={o.order}>
      <div className={o.order__header}>
        <div className={o.order__text}>Мои заказы</div>
        <div className={o.order__btn}>
          <div className={o.status__Btn1}>
            <div className={o.status__text}>Текущие</div>
            <div className={o.status__number1}>0</div>
          </div>
          <div className={o.status__Btn2}>
            <div className={o.status__text}>Завершенные</div>
            <div className={o.status__number2}>00</div>
          </div>
        </div>
      </div>

      <div className={o.order__item}>
        <div className={o.item__description}>
          <div className={o.item__img}>
            <img src={orderImg} alt="" />
          </div>
          <div className={o.item__content}>
            <div className={o.item__name}>Красные розы</div>
            <div className={o.item_details}>
              Заказ #654881 | 10:16 08.06.2022
            </div>
          </div>
        </div>
        <div className={o.item__description}>
          <div className={o.item__delivery}>Прибыло в сортировочный центр</div>
          <div className={o.item__deliveryIcon}>
            <img src={arrivedIcon} alt="" />
          </div>
          <div className={o.item__price}>9 000 ₸</div>
          <div className={o.item__iconNext}>
            <img src={arrowDown} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;

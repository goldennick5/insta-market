import o from './OrdersPage.module.scss';
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
    </div>
  );
};

export default OrdersPage;

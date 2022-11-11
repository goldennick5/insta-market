import React from 'react';
import s from './DeliveryModal.module.scss';
import exit from '../../../../assets/images/OrdersPage/exitModal.svg';
import qr from '../../../../assets/images/OrdersPage/qr.jpg';
import link from '../../../../assets/images/OrdersPage/link.svg';
import DeliveryItem from './DeliveryItem';
import { connect } from 'react-redux';
import ellipse from '../../../../assets/images/OrdersPage/ellipse.svg';
import noColorEllipse from '../../../../assets/images/OrdersPage/noColorEllipse.svg';

const DeliveryModal = ({ showModal, closeModal, props }) => {
  return (
    <div
      className={
        showModal ? `${s.modal__container} ${s.active}` : s.modal__container
      }
    >
      <div className={s.modal__container__content}>
        <div className={s.modal__header}>
          <div className={s.modal__order}>Заказ #654881 Доставка</div>
          <div className={s.modal__exit} onClick={closeModal}>
            <img src={exit} alt="exitBtn" />
          </div>
        </div>
        <div className={s.modal__middle}>
          <div className={s.modal__leftPart}>
            <div className={s.modal__title}>Цена:</div>
            <div className={s.modal__subtitle}>Информация о посылке</div>
            <div className={s.delivery__information}>
              <div className={s.information__wrapper}>
                <div className={s.information__title}>Отправитель</div>
                <div className={s.information__subtitle}>
                  {props.name} ({props.account})
                </div>
                <div className={s.information__address}>
                  {props.city}, {}
                  ул. {props.street}, {}
                  дом {props.house}, {}
                  офис {props.flat}
                </div>
              </div>
              <div className={s.information__wrapper}>
                <div className={s.information__title}>Получатель</div>
                <div className={s.information__subtitle}>Jane Doe</div>
                <div className={s.information__address}>
                  Алматы, 12 улица, офис 7
                </div>
              </div>
              <div className={s.information__wrapper}>
                <div className={s.information__title}>Адресная доставка</div>
                <div className={s.information__address}>
                  Алматы, ул. 12, Офис 7
                </div>
              </div>
              <div className={s.information__wrapper}>
                <div className={s.information__title}>Комментарий</div>
                <div className={s.information__address}>
                  Доставьте в целости на 12 улицу в офис 7
                </div>
              </div>
            </div>
            <hr className={s.modal__hr}></hr>
            <div className={s.modal__qr}>
              <div className={s.qr__title}>
                Отслеживайте посылку с помощью ссылки или QR
              </div>
              <img src={qr} alt=""></img>
            </div>
            <div className={s.link}>
              <div className={s.link__text}>
                https://delivery.kassa24.kz/123
              </div>
              <div className={s.link__img}>
                <img src={link} alt="linkImg"></img>
              </div>
            </div>
          </div>
          <div className={s.modal__rightPart}>
            <div className={s.modal__title}>
              Отслеживание посылки: MP123456789012345
            </div>
            <div className={s.modal__tracking}>
              <div className={s.modal__trackingFinish}>
                <div className={s.modal__end}>
                  <div className={s.modal__fromName}>
                    {props.name} ({props.account})
                  </div>
                  <div className={s.information__address}>
                    {props.city}, {}
                    ул. {props.street}, {}
                    дом {props.house}
                  </div>
                </div>
                <img src={ellipse} className={s.ellipse} alt=""></img>
              </div>
              {props.additionalInfo.trackingData.map((track) => (
                <DeliveryItem track={track} />
              ))}
              <div className={s.modal__trackingFinish}>
                <div className={s.modal__end}>
                  <div className={s.information__address}>
                    <div className={s.modal__fromName}>Jane Doe</div>
                    Алматы, ул. 12, Офис 7
                  </div>
                </div>
                <img
                  src={noColorEllipse}
                  className={s.noColorEllipse}
                  alt=""
                ></img>
                <div className={s.dashedLine}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  orders: state.orders.orders,
});

export default connect(mapStateToProps)(DeliveryModal);

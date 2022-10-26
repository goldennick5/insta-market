import React from 'react';
import './SideBar.scss';
import Address from '../../../assets/images/Address.svg';
import Cards from '../../../assets/images/Cards.svg';
import Frame from '../../../assets/images/Frame.svg';
import Orders from '../../../assets/images/Orders.svg';
import FAQ from '../../../assets/images/FAQ.svg';
function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__profile">
        <div className="profile__image">
          <img src={Frame} alt="" />
        </div>
        <div className="profile__name">Jane Doe</div>
      </div>
      <div>
        <div className="services">
          <div className="services-content">
            <div className="services__icon">
              <img src={Orders} alt="icon" />
            </div>
            <div className="services__text">Мои заказы</div>
          </div>
          <div className="services-content">
            <div className="services__icon">
              <img src={Cards} alt="" />
            </div>
            <div className="services__text">Мои карты</div>
          </div>
          <div className="services-content">
            <div className="services__icon">
              <img src={Address} alt="addresss" />
            </div>
            <div className="services__text">Адреса доставки</div>
          </div>
        </div>
        <div className="shop">
          <div className="shop__text">Хотите открыть свой магазин у нас?</div>
        </div>
        <div className="questions">
          <div className="questions__content">
            <div className="questions__icon">
              <img src={FAQ} alt="faq"></img>
            </div>
            <div className="questions__description">
              <div className="questions__text">У Вас есть вопросы?</div>
              <div className="questions__subtext">
                Мы с радостью поможем Вам!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Address from '../../../assets/images/address.svg';
import Cards from '../../../assets/images/cards.svg';
import Frame from '../../../assets/images/frame.svg';
import Orders from '../../../assets/images/orders.svg';
import FAQ from '../../../assets/images/faq.svg';
import image from '../../../assets/images/ellipse.svg';
import shopBg from '../../../assets/images/shop-bg.svg';
import edit from '../../../assets/images/edit.svg';
import { useState } from 'react';
import s from './SideBar.module.scss';
function SideBar(props) {
  const [category, setCategory] = useState('orders');
  const navigate = useNavigate();

  const nav = (path) => {
    navigate(`cabinet/${path}`);
    setCategory(path);
  };

  return (
    <div className={s.sidebar}>
      <button className={s.edit}>
        <img src={edit} alt="edit" />
      </button>
      <div className={s.sidebar__profile}>
        <div
          className={s.profile__image}
          style={{ backgroundImage: `url(${image})` }}
        >
          <img src={Frame} alt="" />
        </div>
        <div className={s.profile__name}>{props.signUpName}</div>
      </div>
      <div className={s.services}>
        <div
          className={
            category === 'orders'
              ? `${s.services__content} ${s.active}`
              : s.services__content
          }
          onClick={() => nav('orders')}
        >
          <div className={s.services__icon}>
            <img src={Orders} alt="icon" />
          </div>
          <div
            className={
              s.services__text + (category === 'orders' ? 'active' : '')
            }
          >
            Мои заказы
          </div>
        </div>
        <div
          className={
            category === 'cards'
              ? `${s.services__content} ${s.active}`
              : s.services__content
          }
          onClick={() => nav('cards')}
        >
          <div className={s.services__icon}>
            <img src={Cards} alt="" />
          </div>
          <div
            className={
              s.services__text + (category === 'cards' ? 'active' : '')
            }
          >
            Мои карты
          </div>
        </div>
        <div
          className={
            category === 'addresses'
              ? `${s.services__content} ${s.active}`
              : s.services__content
          }
          onClick={() => nav('addresses')}
        >
          <div className={s.services__icon}>
            <img src={Address} alt="address" />
          </div>
          <div
            className={
              s.services__text + (category === 'addresses' ? 'active' : '')
            }
          >
            Адреса доставки
          </div>
        </div>
      </div>
      <div className={s.shop__questions__container}>
        <div className={s.shop} style={{ backgroundImage: `url(${shopBg})` }}>
          <div className={s.shop__text}>Хотите открыть свой магазин у нас?</div>
        </div>
        <div className={s.questions}>
          <div className={s.questions__content}>
            <div className={s.questions__icon}>
              <img src={FAQ} alt="faq"></img>
            </div>
            <div className={s.questions__description}>
              <div className={s.questions__text}>У Вас есть вопросы?</div>
              <div className={s.questions__subtext}>
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

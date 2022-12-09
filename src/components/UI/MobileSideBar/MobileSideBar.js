import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Address from '../../../assets/images/address.svg';
import Cards from '../../../assets/images/cards.svg';
import Orders from '../../../assets/images/orders.svg';
import s from './MobileSideBar.module.scss';

const MobileSideBar = (props) => {
  const [category, setCategory] = useState('orders');
  const navigate = useNavigate();

  const nav = (path) => {
    navigate(`cabinet/${path}`);
    setCategory(path);
  };

  return (
    <div className={s.sidebar}>
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
            Заказы
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
            Карты
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
            Адреса
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileSideBar;
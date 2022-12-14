import React from 'react';
import { useNavigate } from 'react-router-dom';
import Address from '../../../assets/images/address.svg';
import Cards from '../../../assets/images/cards.svg';
import Frame from '../../../assets/images/frame.svg';
import Orders from '../../../assets/images/orders.svg';
import FAQ from '../../../assets/images/faq.svg';
import image from '../../../assets/images/ellipse.svg';
import shopBg from '../../../assets/images/shop-bg.svg';
import editImg from '../../../assets/images/edit.svg';
import { useState } from 'react';
import s from './SideBar.module.scss';
import EditProfile from './EditProfile';
import { connect } from 'react-redux';
import { changeCategory } from '../../../store/reducers/categoryReducer';

const SideBar = (props) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const nav = (path) => {
    props.changeCategory(path);
    navigate(`cabinet/${path}`);
  };

  const handleModal = (param) => {
    setShowModal(param);
  };

  return (
    <div className={s.sidebar}>
      <div className={s.sidebar__buton}>
        <button
          className={s.edit}
          onClick={() => {
            handleModal(true);
          }}
        >
          <img src={editImg} alt="edit" />
        </button>
      </div>

      <div className={s.sidebar__profile}>
        <div
          className={s.profile__image}
          style={{ backgroundImage: `url(${image})` }}
        >
          <img src={props.picture} alt="pic" />
        </div>
        <div className={s.profile__name}>{props.signUpName}</div>
      </div>
      <div className={s.services}>
        <div
          className={
            props.category === 'orders'
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
              s.services__text + (props.category === 'orders' ? 'active' : '')
            }
          >
            Мои заказы
          </div>
        </div>
        <div
          className={
            props.category === 'cards'
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
              s.services__text + (props.category === 'cards' ? 'active' : '')
            }
          >
            Мои карты
          </div>
        </div>
        <div
          className={
            props.category === 'addresses'
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
              s.services__text +
              (props.category === 'addresses' ? 'active' : '')
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
      {showModal && (
        <EditProfile showModal={showModal} handleModal={handleModal} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  picture: state.signup.picture,
  category: state.category.category,
});
const mapDispatchToProps = (dispatch) => ({
  changeCategory: (value) => {
    dispatch(changeCategory(value));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(SideBar);

import React, { useState, useEffect } from 'react';
import s from './EditProfile.module.scss';
import exit from '../../../../assets/images/OrdersPage/exitModal.svg';
import Input from '../../Input/Input';
import image from '../../../../assets/images/ellipse.svg';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  updateValues,
  changeImage,
} from '../../../../store/reducers/signUpReducer';
import ChangePassword from './ChangePassword';
import editPhoto from '../../../../assets/images/EditProfile/editPlus.svg';
import additionalIcon from '../../../../assets/images/EditProfile/additional__icon.svg';
import { changeCategory } from '../../../../store/reducers/categoryReducer';
// import Frame from '../../../../assets/images/frame.svg';

const EditProfile = (props) => {
  const [category, setCategory] = useState('');
  const [name, setName] = useState(props.signUpName || '');
  const [phoneNum, setPhoneNum] = useState(props.signUpPhoneNum || '');
  const [email, setEmail] = useState(props.signUpEmail || '');
  const navigate = useNavigate();
  const [active, setActive] = useState(true);
  const [isPicture, setIsPicture] = useState(false);

  const changeContent = () => {
    setActive(!active);
  };
  const nav = (path) => {
    navigate(`cabinet/${path}`);
    setCategory(path);
    console.log(path);
  };
  const finishEdit = () => {
    props.updateValues(
      {
        name,
        phoneNum,
        email,
      },
      props.handleModal(false)
    );
  };

  const changeImage = (e) => {
    console.log(e.target.files[0]);
    props.changeImage(e.target.files[0]);
    setIsPicture(true);
  };

  const openCardPage = (path) => {
    props.changeCategory(path);
    nav(path);
    props.handleModal(false);
  };

  const openAddressPage = (path) => {
    props.changeCategory(path);
    nav(path);
    props.handleModal(false);
  };

  // useEffect(() => {

  // }, [props.category]);

  return (
    <div
      className={
        props.showModal
          ? `${s.modal__container} ${s.active}`
          : s.modal__container
      }
    >
      {active ? (
        <div className={s.modal__container__content}>
          <div className={s.modal__header}>
            <div
              className={s.modal__exit}
              onClick={() => {
                props.handleModal(false);
              }}
            >
              <img src={exit} alt="exitBtn" />
            </div>
            <div className={s.modal__title}>
              <p> Редактирование профиля </p>
            </div>
            <div className={s.modal__subtitle}>
              <p>Редактируйте свои персональные данные</p>
            </div>
            <div
              className={s.modal__profile}
              style={{ backgroundImage: `url(${image})` }}
            >
              <img
                className={isPicture ? s.profile__img : s.profile__img3}
                src={props.picture}
                alt=""
              />
              <label className={s.profileEdit__btn}>
                <input
                  className={s.input__file}
                  type="file"
                  onChange={changeImage}
                  name="myImage"
                ></input>
                <img
                  className={s.profileEdit__plus}
                  src={editPhoto}
                  alt="editAvatar"
                />
              </label>
            </div>
            <div className={s.modal__form}>
              <Input
                label__focus="Введите имя"
                label="Имя"
                value={name}
                handleTextChange={setName}
              />
              <Input
                label__focus="Номер телефона"
                label="Номер телефона"
                value={phoneNum}
                handleTextChange={setPhoneNum}
              />
              <Input
                label__focus="Email"
                label="Email"
                value={email}
                handleTextChange={setEmail}
              />
              <div className={s.btn__container}>
                <button
                  className={s.btn__changePaswword}
                  onClick={changeContent}
                >
                  Изменить пароль
                </button>
                <button className={s.btn__finish} onClick={finishEdit}>
                  Готово
                </button>
              </div>
            </div>
          </div>

          <div className={s.additional} onClick={() => openCardPage('cards')}>
            <p className={s.additionalText}>
              У Вас нет привязанных карт. Привязка карты упростит процесс
              оплаты.
            </p>
            <div className={s.additional__icon}>
              <img src={additionalIcon} className={s.additional__icon} alt="" />
            </div>
          </div>

          <div
            className={s.additional}
            onClick={() => openAddressPage('addresses')}
          >
            <p className={s.additionalText}>
              У Вас нет добавленных адресов. Добавление адреса упростит
              оформление доставки.
            </p>
            <div className={s.additional__icon}>
              <img src={additionalIcon} className={s.additional__icon} alt="" />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className={s.modal__container__content}>
            <ChangePassword handleModal={props.handleModal} />
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  signUpPhoneNum: state.signup.values.phoneNum,
  signUpName: state.signup.values.name,
  signUpEmail: state.signup.values.email,
  picture: state.signup.picture,
  category: state.category.category,
});

const mapDispatchToProps = (dispatch) => ({
  changeImage: (image) => {
    dispatch(changeImage(image));
  },
  updateValues: (value) => {
    dispatch(updateValues(value));
  },
  changeCategory: (value) => {
    dispatch(changeCategory(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);

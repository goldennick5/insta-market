import React, { useState } from 'react';
import s from './EditProfile.module.scss';
import exit from '../../../../assets/images/OrdersPage/exitModal.svg';
import Input from '../../Input/Input';
import Frame from '../../../../assets/images/frame.svg';
import image from '../../../../assets/images/ellipse.svg';
import Button from '../../button/Button';
import { connect } from 'react-redux';
import { updateValues } from '../../../../store/reducers/signUpReducer';

const EditProfile = (props) => {
  // const [showModal, setShowModal] = useState(false);

  const [name, setName] = useState(props.signUpName || '');
  const [phoneNum, setPhoneNum] = useState(props.signUpPhoneNum || '');
  const [email, setEmail] = useState(props.signUpEmail || '');

  const finishEdit = () =>
    props.updateValues({
      name,
      phoneNum,
      email,
    });

  return (
    <div
      className={
        props.showModal
          ? `${s.modal__container} ${s.active}`
          : s.modal__container
      }
    >
      <div className={s.modal__container__content}>
        <div className={s.modal__header}>
          <div className={s.modal__title}>
            <p> Редактирование профиля </p>
            <div
              className={s.modal__exit}
              onClick={() => {
                props.handleModal(false);
              }}
            >
              <img src={exit} alt="exitBtn" />
            </div>
          </div>
          <div className={s.modal__subtitle}>
            <p>Редактируйте свои персональные данные</p>
          </div>
          <div className={s.modal__profile}>
            <div
              className={s.profile__image}
              style={{ backgroundImage: `url(${image})` }}
            >
              <img src={Frame} alt="" />
            </div>
          </div>
          <div className={s.modal__form}>
            <Input
              label__focus="Введите имя"
              label="Имя"
              value={name}
              handleTexttChange={setName}
            />
            <Input
              label__focus="Номер телефона"
              label="Номер телефона"
              // value={props.signUpPhoneNum}
              // handleTexttChange={(e) => editValue(e, 'phoneNum')}
              value={phoneNum}
              handleTexttChange={setPhoneNum}
            />
            <Input
              label__focus="Email"
              label="Email"
              // value={props.signUpEmail}
              // handleTexttChange={(e) => editValue(e, 'email')}
              value={email}
              handleTexttChange={setEmail}
            />
            <div className={s.btn__container}>
              {/* <Button
                color={'btnBlueGrey'}
                name="Изменить пароль"
                onClick={() => {
                  openModal(true);
                }}
                className={'mb-16'}
              />
              <Button
                color={'btnBlueEdit'}
                name="Готово"
                onClick={finishEdit}
              /> */}
              <button onClick={finishEdit}>Enter</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  signUpPhoneNum: state.signup.values.phoneNum,
  signUpName: state.signup.values.name,
  signUpEmail: state.signup.values.email,
  signUpPassword: state.signup.values.password,
});

export default connect(mapStateToProps, { updateValues })(EditProfile);

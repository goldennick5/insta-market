import React, { useState } from 'react';
import s from './EditProfile.module.scss';
import exit from '../../../../assets/images/OrdersPage/exitModal.svg';
import Input from '../../Input/Input';
import Frame from '../../../../assets/images/frame.svg';
import image from '../../../../assets/images/ellipse.svg';
// import Button from '../../button/Button';
import { connect } from 'react-redux';
import { updateValues } from '../../../../store/reducers/signUpReducer';
import ChangePassword from './ChangePassword';

const EditProfile = (props) => {
  const [name, setName] = useState(props.signUpName || '');
  const [phoneNum, setPhoneNum] = useState(props.signUpPhoneNum || '');
  const [email, setEmail] = useState(props.signUpEmail || '');
  const [password, setPassword] = useState(props.signUpPassword || '');
  const [active, setActive] = useState(true);

  const changeContent = () => {
    setActive(!active);
  };

  const finishEdit = () =>
    props.updateValues({
      name,
      phoneNum,
      email,
      password,
    });

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
                value={phoneNum}
                handleTexttChange={setPhoneNum}
              />
              <Input
                label__focus="Email"
                label="Email"
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
                <button onClick={changeContent}>Изменить пароль</button>
                <button onClick={finishEdit}>Готово</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className={s.modal__container__content}>
            <ChangePassword
              value={password}
              handleTexttChange={setPassword}
              handleModal={props.handleModal}
            />
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
  signUpPassword: state.signup.values.password,
});

export default connect(mapStateToProps, { updateValues })(EditProfile);

import React, { useState } from 'react';
import s from './ChangePassword.module.scss';
import exit from '../../../../../assets/images/OrdersPage/exitModal.svg';
import Input from '../../../Input/Input';
import showeye from '../../../../../pages/icons/showeye.svg';
import unshoweye from '../../../../../pages/icons/unshoweye.svg';
const ChangePassword = (props, password, setPassword) => {
  const [firstShown, setFirstShown] = useState(false);
  const [secondShown, setSecondShown] = useState(false);
  const [showFirstEyeInput, setShowFirstEyeInput] = useState(false);
  const [showSecondEyeInput, setShowSecondEyeInput] = useState(false);

  function toggleFirstPassword() {
    setFirstShown(!firstShown);
  }

  function toggleSecondPassword() {
    setSecondShown(!secondShown);
  }

  const handleFirstChange = (first_text) => {
    if (first_text !== '') {
      setShowFirstEyeInput(true);
    } else {
      setShowFirstEyeInput(false);
    }
    props.handleTexttChange(first_text);
  };

  const handleSecondChange = (second_text) => {
    if (second_text !== '') {
      setShowSecondEyeInput(true);
    } else {
      setShowSecondEyeInput(false);
    }
    props.handleTexttChange(second_text);
  };
  return (
    <div className={s.modal__header}>
      <div className={s.modal__title}>
        <p> Изменить пароль </p>
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
        <p>Смена пароля</p>
      </div>
      <div className={s.password__container}>
        <Input
          type={firstShown ? 'text' : 'password'}
          label__focus="Действующий пароль"
          label="Действующий пароль"
          handleTexttChange={handleFirstChange} 
          //   value={password}
          //   handleTexttChange={setPassword}
        />
        {showFirstEyeInput ? (
          <button className={s.btn__first} onClick={toggleFirstPassword}>
            {firstShown ? (
              <img alt="showeye" src={showeye} />
            ) : (
              <img alt="showeye" src={unshoweye} />
            )}
          </button>
        ) : (
          ''
        )}

        <Input
          type={secondShown ? 'text' : 'password'}
          label__focus="Введите новый пароль"
          label="Введите новый пароль"
          handleTexttChange={handleSecondChange}
        />
        {showSecondEyeInput ? (
          <button className={s.btn__second} onClick={toggleSecondPassword}>
            {secondShown ? (
              <img alt="showeye" src={showeye} />
            ) : (
              <img alt="showeye" src={unshoweye} />
            )}
          </button>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default ChangePassword;

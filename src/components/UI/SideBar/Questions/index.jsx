import React, { useState } from 'react';
import s from './Questions.module.scss';
import exit from '../../../../assets/images/OrdersPage/exitModal.svg';
import Input from '../../Input/Input';
import { connect } from 'react-redux';
import whatsapp from '../../../../assets/images/Sidebar/whatsapp.svg';
import right from '../../../../assets/images/Sidebar/right.svg';
const Questions = (props) => {
  const [comment, setComment] = useState('');
  const finishQuestions = () => {
    props.handleQuestionModal(false);
  };
  return (
    <div
      className={
        props.showQuestionModal
          ? `${s.modal__container} ${s.active}`
          : s.modal__container
      }
    >
      <div className={s.modal__container__content}>
        <div className={s.modal__header}>
          <div
            className={s.modal__exit}
            onClick={() => {
              props.handleQuestionModal(false);
            }}
          >
            <img src={exit} alt="exitBtn" />
          </div>
          <div className={s.modal__title}>
            <p> У вас есть вопросы? </p>
          </div>
          <div className={s.modal__subtitle}>
            <p>
              Позвоните или оставьте заявку, <br></br>мы с радостью поможем вам!
            </p>
          </div>
          <div className={s.support}>
            <img
              className={s.support__whatsapp}
              src={whatsapp}
              alt="WhatsApp"
            />
            <div className={s.support__content}>
              <p className={s.support__title}>Служба поддержки</p>
              <p className={s.support__subtitle}>WhatsApp</p>
            </div>
            <img className={s.support__right} src={right} alt="right"></img>
          </div>

          <div className={s.support__text}>или оставьте заявку</div>

          <div className={s.modal__form}>
            <Input
              label__focus="Введите имя"
              label="Имя"
              value={props.signUpName}
            />
            <Input
              label__focus="Номер телефона"
              label="Номер телефона"
              value={props.signUpPhoneNum}
            />
            <Input
              label__focus="Комментарий"
              label="Комментарий"
              value={comment}
              handleTextChange={setComment}
            />

            <button className={s.btn__finish} onClick={finishQuestions}>
              Оставить заявку
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  signUpName: state.signup.values.name,
  signUpPhoneNum: state.signup.values.phoneNum,
});

export default connect(mapStateToProps, {})(Questions);

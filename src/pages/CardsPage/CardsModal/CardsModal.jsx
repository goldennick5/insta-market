import React from 'react';
import {connect} from "react-redux";
import ButtonModal from "../../../components/UI/button/ButtonModal";
import closeIcon from '../../../assets/images/Modal/closeIcon.svg';
import s from './CardsModal.module.scss';
import {addCard, enterCardValues} from "../../../store/reducers/cardsReducer";

const CardsModal = (props) => {

    const enterCardNumber = (value) => {
        props.enterCardNumber(value);
    }

    const enterValidityPeriod = (value) => {
        props.enterValidityPeriod(value);
    }

    const enterCvCode = (value) => {
        props.enterCvCode(value);
    }

    const addCard = () => {
        props.addCard();
    }

    console.log(props.cards);
    console.log(props.cards.cards.length);

    return (
        <div className={props.showModal ? `${s.modal__container} ${s.active}` : s.modal__container}>
            <div className={s.modal__container__content}>
                <div className={s.modal__container__content__body}>
                    <div className={s.modal__title__container}>
                        <h2 className={s.modal__title}>Добавьте карту</h2>
                        <img className={s.modal__img} onClick={() => props.handleModal(false)} src={closeIcon} alt=""/>
                    </div>
                    <div>
                        <p className={s.modal__paragraph}>Введите данные Вашей карты</p>
                    </div>
                    <div className={s.modal__input__container}>
                        <div className={s.modal__first__input__container}>
                            <label htmlFor="">Номер карты</label>
                            <input className={s.modal__first__input}
                                   placeholder="0000 0000 0000 0000"
                                   type="text"
                                    onChange={(e) => {enterCardNumber(e.target.value)}}/>
                        </div>
                        <div className={s.modal__second__input__container}>
                            <div className={s.second__input}>
                                <label htmlFor="">Срок дейсвия</label>
                                <input placeholder="00/00"
                                       type="text"
                                        onChange={(e) => {enterValidityPeriod(e.target.value)}}/>
                            </div>
                            <div className={s.third__input}>
                                <label htmlFor="">CVV-код</label>
                                <input placeholder="•••"
                                       type="password"
                                        onChange={(e) => {enterCvCode(e.target.value)}}/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ButtonModal color={'btnBlue'} name="Добавить" addCard={addCard} handleModal={props.handleModal}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    cards: state.cards,
    cardNumber: state.cards.values.cardNumber,
    validityPeriod: state.cards.values.validityPeriod,
    cvCode: state.cards.values.cvCode,
})

const mapDispatchToProps = (dispatch) => ({
    enterCardNumber: (value) => {
        dispatch(enterCardValues({
            cardNumber: value
        }))
    },
    enterValidityPeriod: (value) => {
        dispatch(enterCardValues({
            validityPeriod: value
        }))
    },
    enterCvCode: (value) => {
        dispatch(enterCardValues({
            cvCode: value
        }))
    },
    addCard: () => {
        dispatch(addCard())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CardsModal);
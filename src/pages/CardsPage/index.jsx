import React, {useState} from "react";
import CardsModal from "./CardsModal/CardsModal";
import OutletWrapper from "../../components/UI/Wrapper/OutletWrapper/OutletWrapper";
import s from "./CardsPage.module.scss";
import cardsPageLogo from "../../assets/images/CardsPage/cardsPageSvg.svg";
import CardItem from "./CardItem/CardItem";
import {connect} from "react-redux";

const CardsPage = (props) => {
    const [showModal, setShowModal] = useState(false);

    const handleModal = (param) => {
        setShowModal(param);
    }

    return (
        <>
            <OutletWrapper>
                <div className={s.cards__page__container}>
                    <div className={s.cards__title__container}>
                        <h2 className={s.cards__title}>Мои карты</h2>
                    </div>

                    {props.cards.cards.length === 0 ?
                        <div className={s.cards__body}>
                            <div>
                                <img src={cardsPageLogo} alt=""/>
                            </div>
                            <div className={s.cards__paragraph__container}>
                                <p className={s.cards__paragraph}>У вас пока нет привязанных карт. Привязка карты
                                    упростит процесс<br/>оплаты. Вы можете
                                    добавлять и удалять неограниченное количество карт.</p>
                            </div>
                            <div className={s.cards__btn__container} onClick={() => handleModal(true)}>
                                <span></span>
                                <h3 className={s.cards__btn__text}>Добавить карту</h3>
                            </div>
                        </div>
                        :
                        <div className={s.card__list__container}>
                            <p>Привязка карты упростит процесс оплаты. Вы можете добавлять и удалять <br/> неограниченное количество карт.</p>
                            <div className={s.card__list}>
                                {props.cards.cards.map((card) => <CardItem card={card}/>)}
                                <div className={s.cards__btn__container} onClick={() => handleModal(true)}>
                                    <span></span>
                                    <h3 className={s.cards__btn__text}>Добавить карту</h3>
                                </div>
                            </div>
                        </div>
                    }
                </div>
                <CardsModal showModal={showModal} handleModal={handleModal}/>
            </OutletWrapper>
        </>
    )
}

const mapStateToProps = (state) => ({
    cards: state.cards,
    cardNumber: state.cards.values.cardNumber,
    validityPeriod: state.cards.values.validityPeriod,
    cvCode: state.cards.values.cvCode,
})

export default connect(mapStateToProps, {})(CardsPage);

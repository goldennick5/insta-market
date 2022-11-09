import OutletWrapper from "../../components/UI/Wrapper/OutletWrapper/OutletWrapper";
import s from "./CardsPage.module.scss";
import cardsPageLogo from "../../assets/images/CardsPage/cardsPageSvg.svg";

const CardsPage = () => {
    return (
        <>
            <OutletWrapper>
                <div className={s.cards__page__container}>
                    <div className={s.cards__title__container}>
                        <h2 className={s.cards__title}>Мои карты</h2>
                    </div>
                    <div className={s.cards__body}>
                        <div>
                            <img src={cardsPageLogo} alt=""/>
                        </div>
                        <div className={s.cards__paragraph__container}>
                            <p className={s.cards__paragraph}>У вас пока нет привязанных карт. Привязка карты упростит процесс<br/>оплаты. Вы можете
                                добавлять и удалять неограниченное количество карт.</p>
                        </div>
                        <div className={s.cards__btn__container}>
                            <span></span>
                            <h3 className={s.cards__btn__text}>Добавить карту</h3>
                        </div>
                    </div>
                </div>
            </OutletWrapper>
        </>
    )
}

export default CardsPage;
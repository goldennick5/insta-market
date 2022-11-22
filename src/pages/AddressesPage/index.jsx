import React, {useState} from "react";
import s from './AddressesPage.module.scss';
import addressPageLogo from '../../assets/images/AddressesPage/deliveryCard.svg';
import OutletWrapper from "../../components/UI/Wrapper/OutletWrapper/OutletWrapper";
import AddressesModal from "./AddressesModal/AddressesModal";

const AddressesPage = () => {
    const [showModal, setShowModal] = useState(false);

    const handleModal = (param) => {
        setShowModal(param);
    }

    return (
        <>
            <OutletWrapper>
                <div className={s.address__page__container}>
                    <div className={s.address__title__container}>
                        <h2 className={s.address__title}>Мои адреса</h2>
                    </div>
                    <div className={s.address__body}>
                        <div>
                            <img src={addressPageLogo} alt=""/>
                        </div>
                        <div className={s.address__paragraph__container}>
                            <p className={s.address__paragraph}>У вас пока нет привязанных карт. Привязка карты
                                упростит процесс<br/>оплаты. Вы можете
                                добавлять и удалять неограниченное количество карт.</p>
                        </div>
                        <div className={s.address__btn__container} onClick={() => handleModal(true)}>
                            <span></span>
                            <h3 className={s.address__btn__text}>Добавить карту</h3>
                        </div>
                    </div>
                </div>
                <AddressesModal showModal={showModal} handleModal={handleModal}/>
            </OutletWrapper>
        </>
    );
};

export default AddressesPage;

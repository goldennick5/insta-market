import React, {useEffect, useState} from "react";
import OutletWrapper from "../../components/UI/Wrapper/OutletWrapper/OutletWrapper";
import AddressesModal from "./AddressesModal/AddressesModal";
import AddressItem from "./AddressItem/AddressItem";
import {connect} from "react-redux";
import s from './AddressesPage.module.scss';
import addressPageLogo from '../../assets/images/AddressesPage/deliveryCard.svg';

const AddressesPage = (props) => {
    const [showModal, setShowModal] = useState(false);

    const handleModal = (param) => {
        setShowModal(param);
    }

    if(props.addresses.addresses.length == 0){
        props.addresses.addresses = [];
    }

    return (
        <>
            <OutletWrapper>
                <div className={s.address__page__container}>
                    <div className={s.address__title__container}>
                        <h2 className={s.address__title}>Мои адреса</h2>
                    </div>
                    {
                        props.addresses.addresses.length === 0 ?
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
                            :
                            <div className={s.address__list__container}>
                                <p>Добавление адреса упростит процесс оформления доставки. Вы можете <br/> добавлять и
                                    удалять неограниченное количество адресов.</p>
                                <div className={s.address__list}>
                                    {props.addresses.addresses.map((address) => <AddressItem key={address.id}
                                                                                             address={address}
                                                                                             handleModal={handleModal}/>)}
                                    <div className={s.address__btn__container} onClick={() => handleModal(true)}>
                                        <span></span>
                                        <h3 className={s.address__btn__text}>Добавить адрес</h3>
                                    </div>
                                </div>
                            </div>
                    }
                </div>
                <AddressesModal showModal={showModal}
                                handleModal={handleModal}
                                />
            </OutletWrapper>
        </>
    );
};

const mapStateToProps = (state) => ({
    addresses: state.addresses,
    addressName: state.addresses.values.addressName
});

export default connect(mapStateToProps, {})(AddressesPage);

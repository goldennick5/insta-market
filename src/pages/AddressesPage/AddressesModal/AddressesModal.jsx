import React, {useState} from 'react';
import ButtonModal from "../../../components/UI/button/ButtonModal";
import Input from "../../../components/UI/Input/Input";
import {enterAddressesValues, addAddress} from "../../../store/reducers/addressesReducer";
import {connect} from "react-redux";
import s from "./AddressesModal.module.scss";
import closeIcon from "../../../assets/images/Modal/closeIcon.svg";

const AddressesModal = (props) => {

    const [isLabel, setIsLabel] = useState(false);

    const handleChange = (event) => {
        if (event.target.value !== '') {
            setIsLabel(true);
        } else {
            setIsLabel(false);
        }
    };

    const enterAddressName = (value) => {
        props.enterAddressName(value);
    }

    const enterCity = (value) => {
        props.enterCity(value);
    }

    const enterStreet = (value) => {
        props.enterStreet(value);
    }

    const enterHomeNum = (value) => {
        props.enterHomeNum(value);
    }

    const enterOfficeNum = (value) => {
        props.enterOfficeNum(value);
    }

    const enterComment = (value) => {
        props.enterComment(value);
    }

    const addAddress = () => {
        props.addAddress();
    }

    return (
        <div className={props.showModal ? `${s.modal__container} ${s.active}` : s.modal__container}>
            <div className={s.modal__container__content}>
                <div className={s.modal__container__content__body}>
                    <div className={s.modal__title__container}>
                        <h2 className={s.modal__title}>Добавить адрес</h2>
                        <img className={s.modal__img} onClick={() => props.handleModal(false)} src={closeIcon} alt=""/>
                    </div>

                    <div className={s.switch}>
                        <div className={s.switch__delivery}>
                            <p className={s.paragraph__delivery}>Адресная доставка</p>
                        </div>
                        <div className={s.switch__post}>
                            <p className={s.paragraph__post}>Постомат</p>
                        </div>
                    </div>

                    <div className={s.modal__paragraph__container}>
                        <p className={s.modal__paragraph}>Введите адрес для доставки</p>
                    </div>
                    <div className={s.addresses__input__container}>
                        <div style={{marginTop: "15px"}}>
                            <Input className={s.addresses__input} label__focus="Название адреса" label="Название адреса"
                                   handleTexttChange={enterAddressName}/>
                        </div>
                        <div style={{marginTop: "15px"}}>
                            <Input className={s.addresses__input} label__focus="Город" label="Ваш город"
                                   handleTexttChange={enterCity}/>
                        </div>
                        <div style={{marginTop: "15px"}}>
                            <Input className={s.addresses__input} label__focus="Улица" label="Улица"
                                   handleTexttChange={enterStreet}/>
                        </div>
                        <div style={{display: "flex", marginTop: "15px"}}>
                            <Input className={s.addresses__home} label__focus="Дом" label="Номер дома"
                                   handleTexttChange={enterHomeNum}/>
                            <Input className={s.addresses__office} label__focus="Квартира / Офис" label="Номер офиса"
                                   handleTexttChange={enterOfficeNum}/>
                        </div>
                        <div style={{marginTop: "15px"}}>
                            <Input className={s.addresses__input} label__focus="Комментарий"
                                   label="Комментарий к доставке" handleTexttChange={enterComment}/>
                        </div>
                    </div>
                    <div>
                        <button onClick={() => addAddress() || props.handleModal(false)}>Добавить</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    addresses: state.addresses,
    addressName: state.addresses.values.addressName,
    city: state.addresses.values.city,
    street: state.addresses.values.street,
    homeNum: state.addresses.values.homeNum,
    officeNum: state.addresses.values.officeNum,
    comment: state.addresses.values.comment,
});

const mapDispatchToProps = (dispatch) => ({
    enterAddressName: (value) => {
        dispatch(enterAddressesValues({
            addressName: value
        }))
    },
    enterCity: (value) => {
        dispatch(enterAddressesValues({
            city: value
        }))
    },
    enterStreet: (value) => {
        dispatch(enterAddressesValues({
            street: value
        }))
    },
    enterHomeNum: (value) => {
        dispatch(enterAddressesValues({
            homeNum: value
        }))
    },
    enterOfficeNum: (value) => {
        dispatch(enterAddressesValues({
            officeNum: value
        }))
    },
    enterComment: (value) => {
        dispatch(enterAddressesValues({
            comment: value
        }))
    },
    addAddress: () => {
        dispatch(addAddress())
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(AddressesModal);
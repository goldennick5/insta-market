import React, {useState} from 'react';
import Input from "../../../components/UI/Input/Input";
import AddressesPostPage from "../AddressesPostPage/AddressesPostPage";
import {connect} from "react-redux";
import {
    enterAddressesValues,
    addAddress,
    editAddress, clearInputs, detailsAddress
} from "../../../store/reducers/addressesReducer";
import s from "./AddressesModal.module.scss";
import closeIcon from "../../../assets/images/Modal/closeIcon.svg";
import back from '../../../assets/images/back.svg';

const AddressesModal = (props) => {
    const [isSwitched, setIsSwitched] = useState(true);

    const toggleBtn = (param) => {
        setIsSwitched(param);
    }

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

    const editAddress = (id) => {
        props.editAddress(id);
        props.handleModal(false);
    }

    const clearInputs = () => {
        props.clearInputs();
    }

    return (
        <div className={props.showModal ? `${s.modal__container} ${s.active}` : s.modal__container}>
            <div className={s.modal__container__content}>
                <div className={s.modal__container__content__body}>
                    <div className={s.modal__title__container}>
                        <h2 className={s.modal__title}>Добавить адрес</h2>
                        <img className={s.modal__img} onClick={() => props.handleModal(false) || clearInputs()} src={closeIcon} alt=""/>
                    </div>
                    <div className={s.modal__title__container__mobile}>
                        <h2 className={s.modal__title}>Добавить адрес</h2>
                        <img className={s.modal__img} onClick={() => props.handleModal(false) || clearInputs()} src={back} alt=""/>
                    </div>

                    <div className={s.switch}>
                        <div onClick={() => toggleBtn(true)}
                             className={isSwitched ? `${s.switch__delivery} ${s.switch__post}` : `${s.switch__delivery__two} ${s.switch__post__two}`}>
                            <p>Адресная доставка</p>
                        </div>
                        <div onClick={() => toggleBtn(false)}
                             className={isSwitched ? `${s.switch__delivery__two} ${s.switch__post__two}` : `${s.switch__delivery} ${s.switch__post}` }>
                            <p>Постомат</p>
                        </div>
                    </div>

                    {isSwitched ?
                        <div>
                            <div className={s.modal__paragraph__container}>
                                <p className={s.modal__paragraph}>Введите адрес для доставки</p>
                            </div>
                            <div className={s.addresses__input__container}>
                                <div className={s.addresses__input__box}>
                                    <Input className={s.addresses__input} label__focus="Название адреса" label="Название адреса"
                                           handleTextChange={enterAddressName}
                                           value={props.addressName}/>
                                </div>
                                <div className={s.addresses__input__box}>
                                    <Input className={s.addresses__input} label__focus="Город" label="Ваш город"
                                           handleTextChange={enterCity}
                                           value={props.city}/>
                                </div>
                                <div className={s.addresses__input__box}>
                                    <Input className={s.addresses__input} label__focus="Улица" label="Улица"
                                           handleTextChange={enterStreet}
                                           value={props.street}/>
                                </div>
                                <div className={s.home__office}>
                                    <Input className={s.addresses__home} label__focus="Дом" label="Номер дома"
                                           handleTextChange={enterHomeNum}
                                           value={props.homeNum}/>
                                    <Input className={s.addresses__office} label__focus="Квартира / Офис" label="Номер офиса"
                                           handleTextChange={enterOfficeNum}
                                           value={props.officeNum}/>
                                </div>
                                <div className={s.addresses__input__box}>
                                    <Input className={s.addresses__input} label__focus="Комментарий"
                                           label="Комментарий к доставке" handleTextChange={enterComment}
                                           value={props.comment}/>
                                </div>
                            </div>
                        </div>
                    :
                        <AddressesPostPage toggleBtn={toggleBtn } />
                    }


                    <div className={s.btn__container}>
                        <button onClick={() => addAddress() || props.handleModal(false)}
                                className={s.btnBlue}>Добавить
                        </button>
                        <button onClick={() => editAddress(props.currentId)} className={s.btnGray}>Изменить</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => (console.log(state),{
    addresses: state.addresses,
    id: state.addresses.values.id,
    currentId: state.addresses.currentId,
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
    editAddress: (id) => {
        dispatch(editAddress(id));
    },
    clearInputs: () => {
        dispatch(clearInputs());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddressesModal);
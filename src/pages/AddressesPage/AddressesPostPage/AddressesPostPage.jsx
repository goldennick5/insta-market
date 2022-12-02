import React from 'react';
import s from "./AddressesPostPage.module.scss"
import Input from "../../../components/UI/Input/Input";
import {connect} from "react-redux";
import {addAddress, enterAddressesValues} from "../../../store/reducers/addressesReducer";

const AddressesPostPage = (props) => {
    const enterAddressName = (value) => {
        props.enterAddressName(value);
    }


    const enterCity = (value) => {
        props.enterCity(value);
    }

    const enterStreet = (value) => {
        props.enterStreet(value);
    }

    return (
        <>
            <div className={s.modal__paragraph__container}>
                <p className={s.modal__paragraph}>Введите адрес для доставки</p>
            </div>
            <div className={s.addresses__input__container}>
                <div style={{marginTop: "40px", fontSize: "18px", fontWeight: 500}}>
                    <Input className={s.addresses__input} label__focus="Название адреса" label="Название адреса"
                           style={{fontSize: "18px", fontWeight: 500}}
                           handleTexttChange={enterAddressName}
                           value={props.addressName}/>
                </div>
                <div style={{marginTop: "13px", fontSize: "18px", fontWeight: 500}}>
                    <Input className={s.addresses__input} label__focus="Город" label="Ваш город"
                           style={{fontSize: "18px", fontWeight: 500}}
                           handleTexttChange={enterCity}
                           value={props.city}/>
                </div>
                <div style={{marginTop: "13px", fontSize: "18px", fontWeight: 500}}>
                    <Input className={s.addresses__input} label__focus="Выберите постамат" label="Выберите постамат"
                           style={{fontSize: "18px", fontWeight: 500}}
                           handleTexttChange={enterStreet}
                           value={props.street}/>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = (state) => ({
    addresses: state.addresses,
    addressName: state.addresses.values.addressName,
    city: state.addresses.values.city,
    street: state.addresses.values.street,
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
    addAddress: () => {
        dispatch(addAddress())
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(AddressesPostPage);
import React from 'react';
import {deleteAddress, updateAddress} from "../../../store/reducers/addressesReducer";
import {connect} from "react-redux";
import s from "./AddressItem.module.scss";
import del from "../../../assets/images/AddressesPage/icons/delete.svg";
import edit from "../../../assets/images/AddressesPage/icons/Edit.svg";

const AddressItem = (props) => {
    const deleteAddress = (index) => {
        props.deleteAddress(index);
    }

    const updateAddress = (index) => {
        props.handleModal(true)
        props.updateAddress(index);
    }
    
    return (
        <div className={s.card}>
            <div className={s.card__title}>
                <div><h3>{props.address.addressName}</h3></div>
                <div>
                    <img className={s.img__one} src={edit} onClick={updateAddress} alt="edit"/>
                    <img className={s.img__two} src={del} onClick={() => deleteAddress(props.address.id)} alt="delete"/>
                </div>
            </div>
            <div className={s.card__body}>
                <h5>г. {props.address.city}, ул. {props.address.street}, д. {props.address.homeNum}, кв. {props.address.officeNum}</h5>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    addresses: state.addresses
});

const mapDispatchToProps = (dispatch) => ({
    deleteAddress: (id) => {
        dispatch(deleteAddress(id));
    },
    updateAddress: (address) => {
        dispatch(updateAddress(address));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddressItem);
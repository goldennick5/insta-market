import React from 'react';
import {deleteAddress} from "../../../store/reducers/addressesReducer";
import s from "./AddressItem.module.scss";
import del from "../../../assets/images/AddressesPage/icons/delete.svg";
import edit from "../../../assets/images/AddressesPage/icons/Edit.svg";
import {connect} from "react-redux";

const AddressItem = (props) => {
    const deleteAddress = (index) => {
        props.deleteAddress(index);
    }
    
    return (
        <div className={s.card}>
            <div className={s.card__title}>
                <div><h3>{props.address.addressName}</h3></div>
                <div>
                    <img className={s.img__one} src={edit} alt=""/>
                    <img className={s.img__two} src={del} onClick={() => deleteAddress(props.address.id)} alt=""/>
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
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddressItem);
import React from 'react';
import {connect} from "react-redux";
import {deleteAddress, detailsAddress} from "../../../store/reducers/addressesReducer";
import s from "./AddressItem.module.scss";
import del from "../../../assets/images/AddressesPage/icons/delete.svg";
import edit from "../../../assets/images/AddressesPage/icons/Edit.svg";

const AddressItem = (props) => {

    const deleteAddress = (id) => {
        props.deleteAddress(id);
    }

    const detailsAddress = (id) => {
        props.handleModal(true);
        props.detailsAddress(id);
    }

    return (
        <div className={s.card}>
            <div className={s.card__title}>
                <div><h3>{props.address.addressName}</h3></div>
                <div>
                    <img className={s.img__one} src={edit} onClick={() => detailsAddress(props.address.id)} alt="edit"/>
                    <img className={s.img__two} src={del} onClick={() => deleteAddress(props.address.id)} alt="delete"/>
                </div>
            </div>
            <div className={s.card__body}>
                <h5>г. {props.address.city}, ул. {props.address.street}, д. {props.address.homeNum},
                    кв. {props.address.officeNum}</h5>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    addresses: state.addresses,
});

const mapDispatchToProps = (dispatch) => ({
    deleteAddress: (id) => {
        dispatch(deleteAddress(id));
    },
    detailsAddress: (address) => {
        dispatch(detailsAddress(address));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddressItem);
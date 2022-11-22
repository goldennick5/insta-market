import React from 'react';
import {connect} from "react-redux";
import bin from "../../../assets/images/CardsPage/icons/delete.svg";
import s from "./CardItem.module.scss";
import {deleteCard} from "../../../store/reducers/cardsReducer";

const CardItem = (props) => {
    const deleteCard = (index) => {
        props.deleteCard(index);
    }

    return (
        <div className={s.card}>
            <img src={bin} alt="bin" onClick={() => deleteCard(props.card.id)}/>
            <h3>{props.card.cardNumber}</h3>
            <h4>{props.card.validityPeriod}</h4>
        </div>
    );
};

const mapStateToProps = (state) => ({
    cards: state.cards
});

const mapDispatchToProps = (dispatch) => ({
    deleteCard: (id) => {
        dispatch(deleteCard(id));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(CardItem);
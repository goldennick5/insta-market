import React from 'react';
import triangle from '../../../assets/images/CardsPage/icons/triangle.png';
import s from "./CardItem.module.scss";

const CardItem = (props) => {
    return (
        <div className={s.card}>
            <h3>{props.card.cardNumber}</h3>
            <h4>{props.card.validityPeriod}</h4>
        </div>
    );
};

export default CardItem;
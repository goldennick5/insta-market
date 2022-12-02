import React from 'react';
import {useNavigate} from "react-router-dom";
import './SideBar.scss';
import Address from '../../../assets/images/address.svg';
import Cards from '../../../assets/images/cards.svg';
import Frame from '../../../assets/images/frame.svg';
import Orders from '../../../assets/images/orders.svg';
import FAQ from '../../../assets/images/faq.svg';
import image from '../../../assets/images/ellipse.svg';
import shopBg from '../../../assets/images/shop-bg.svg';
import edit from '../../../assets/images/edit.svg';

function SideBar(props) {
    const navigate = useNavigate();
    return (
        <div className="sidebar">
            <button className="edit">
                <img src={edit} alt="edit"/>
            </button>
            <div className="sidebar__profile">
                <div
                    className="profile__image"
                    style={{backgroundImage: `url(${image})`}}
                >
                    <img src={Frame} alt=""/>
                </div>
                <div className="profile__name">{props.signUpName}</div>
            </div>
            <div className="services">
                <div className="services-content" onClick={() => navigate('cabinet/orders')}>
                    <div className="services__icon">
                        <img src={Orders} alt="icon"/>
                    </div>
                    <div className="services__text">Мои заказы</div>
                </div>
                <div className="services-content" onClick={() => navigate('cabinet/cards')}>
                    <div className="services__icon">
                        <img src={Cards} alt=""/>
                    </div>
                    <div className="services__text">Мои карты</div>
                </div>
                <div className="services-content" onClick={() => navigate('cabinet/addresses')}>
                    <div className="services__icon">
                        <img src={Address} alt="addresss"/>
                    </div>
                    <div className="services__text">Адреса доставки</div>
                </div>
            </div>
            <div className="shop__questions__container">
                <div className="shop" style={{backgroundImage: `url(${shopBg})`}}>
                    <div className="shop__text">Хотите открыть свой магазин у нас?</div>
                </div>
                <div className="questions">
                    <div className="questions__content">
                        <div className="questions__icon">
                            <img src={FAQ} alt="faq"></img>
                        </div>
                        <div className="questions__description">
                            <div className="questions__text">У Вас есть вопросы?</div>
                            <div className="questions__subtext">Мы с радостью поможем Вам!</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideBar;
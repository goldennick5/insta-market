import React, {useState} from 'react';
import swit from './Switch.module.scss';
import {useNavigate, useLocation} from "react-router-dom";

const Switch = () => {
    let navigate = useNavigate();
    let location = useLocation();

    const handleClickAuth = (path) => {
        navigate(path);
    }

    return (
        <div className={swit.switch}>
            <div className={swit.switch__signin}
                 onClick={() => handleClickAuth('/signin')}
                style={{background: location.pathname === '/signin' ? '#458BF5' : '#F4F6FC',
                    color: location.pathname === '/signin' ? '#fff' : '#9E9EA8',
                    fontWeight: location.pathname === '/signin' ? 700 : ''}}>
                <p className={swit.paragraph}>Вход</p>
            </div>
            <div className={swit.switch__signup}
                 onClick={() => handleClickAuth('/signup')}
                 style={{background: location.pathname === '/signup' ? '#458BF5' : '#F4F6FC',
                        color: location.pathname === '/signup' ? '#fff' : '#9E9EA8',
                        fontWeight: location.pathname === '/signup' ? 700 : ''}}>
                <p className={swit.paragraph}>Регистрация</p>
            </div>
        </div>
    );
};

export default Switch;

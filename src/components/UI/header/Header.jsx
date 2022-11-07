import React from 'react';
import s from './Header.module.scss';
import exit from '../../../assets/images/exit.svg';
import logo from '../../../assets/images/logo.svg';
import { useLocation } from 'react-router-dom';

function Header(props) {
  let location = useLocation();

  return (
    <div className={s.header}>
      <div className={s.header__logo}>
        <img src={logo} alt="" className="logo" />
      </div>
      {location.pathname === '/signin' || location.pathname === '/signup' ? (
        ''
      ) : (
        <div className={s.header__exit}>
          <button className={s.exit__btn}>
            <img src={exit} alt="" className={s.exit__img} />
            <div className={s.exit__text}>Выйти</div>
          </button>
        </div>
      )}
        {props.signUpData === 2 || props.signUpData === 3 || props.signUpData === 4 ? (
            <div className={s.header__back}>
                <button className={s.back__btn} onClick={props.handleStepsBack}>
                    <img src={exit} alt="" className={s.back__img} />
                    <div className={s.back__text}>Назад</div>
                </button>
            </div>
        ) : (
            ''
        )}
    </div>
  );
}

export default Header;

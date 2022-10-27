import React from 'react';
import s from './Header.module.scss';
import exit from '../../../assets/images/exit.svg';
import logo from '../../../assets/images/logo.svg';
import { useLocation } from 'react-router-dom';

function Header() {
  let location = useLocation();

  return (
    <div className={s.header}>
      <div className={s.header__logo}>
        <img src={logo} alt="" className="logo" />
      </div>
      {location.pathname === '/signin' || location.pathname === '/signup' ? (
        ''
      ) : (
        <button className={s.header__exit}>
          <img src={exit} alt="" className={s.exit__img} />
          <div className={s.exit__text}>Выйти</div>
        </button>
      )}
    </div>
  );
}

export default Header;

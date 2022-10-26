import React from 'react';
import Button from './button/Button';
import s from './button/Button';
function ButtonsWrapper() {
  return (
    <Button name="Enter" className={`${s.btn} ${s.blue}`}>
      Войти
    </Button>

    //   <Button name="Enter">Вернуться в витрину</Button>
  );
}

export default ButtonsWrapper;

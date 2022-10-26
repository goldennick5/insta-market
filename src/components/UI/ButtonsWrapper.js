import React from 'react';
import Button from './button/Button';

function ButtonsWrapper() {
  return (
    <div>
      <Button name="Войти" color="btnBlue"></Button>
      <Button name="Вернуться в витрину" color="btnNoColor"></Button>
    </div>
  );
}

export default ButtonsWrapper;

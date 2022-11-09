import React from 'react';
import closeIcon from '../../../assets/images/Modal/closeIcon.svg';
import './Modal.scss';

const Modal = () => {
  return (
    <div id="modal-block">
      <a class="close-block" href="#close-block">
          <img src={closeIcon} alt=""/>
      </a>
      <h3>{}</h3>
    </div>
  );
};

export default Modal;

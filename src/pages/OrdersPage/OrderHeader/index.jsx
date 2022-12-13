import React, {useState} from 'react';
import o from './OrderHeader.module.scss';

function OrderHeader(props) {
  // const [show, setShow] = useState(false);
  const [isSwitched, setIsSwitched] = useState(true);

  const toggleBtn = (param) => {
    setIsSwitched(param);
  }

  return (
    <>
      <div className={o.order__header}>
      <div className={o.order__text}>Мои заказы</div>
      <div className={o.order__btn}>
        <button
          className={o.status__Btn1}
          onClick={() => (props.doFilter(0), props.togler(true))}
          style={{
            background: props.toggle ? '#458cf5' : '#fafafa',
            color: props.toggle ? '#ffffff' : '#415273',
          }}
        >
          <div className={o.status__text}>Текущие</div>
          <div
            className={o.status__number1}
            style={{
              background: props.toggle ? '#ffffff' : '#f2f2f5',
              color: props.toggle ? '#458cf5' : '#415273',
            }}
          >
            {props.current}
          </div>
        </button>
        <button
          className={o.status__Btn2}
          onClick={() => (props.doFilter(1), props.togler(false))}
          style={{
            background: !props.toggle ? '#458cf5' : '#fafafa',
            color: !props.toggle ? '#ffffff' : '#415273',
          }}
        >
          <div className={o.status__text}>Завершенные</div>
          <div
            className={o.status__number2}
            style={{
              background: !props.toggle ? '#ffffff' : '#f2f2f5',
              color: !props.toggle ? '#458cf5' : '#415273',
            }}
          >
            {props.finish}
          </div>
        </button>
       </div>
      </div>
      
      <div className={o.switch}>
        <div onClick={() => (toggleBtn(true), props.doFilter(0))}
            className={isSwitched ? `${o.switch__delivery} ${o.switch__post}` : `${o.switch__delivery__two} ${o.switch__post__two}`}>
          <p>Текущие <div className={o.current}>{props.current}</div></p>
        </div>
        <div onClick={() => (toggleBtn(false), props.doFilter(1))}
            className={isSwitched ? `${o.switch__delivery__two} ${o.switch__post__two}` : `${o.switch__delivery} ${o.switch__post}` }>
          <p>Завершенные <div className={o.finished}>{props.finish}</div></p>
        </div>
      </div>
    </>
  );
}

export default OrderHeader;

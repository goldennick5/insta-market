import React from 'react';
import s from "./steps.module.scss";
import stepSix from '../../../assets/images/WelcomePage/stepSix.svg';

const Step6 = () => {
    return (
        <div className={s.step6_container}>
            <div className={s.step6__title}>
                <h3><span className={s.step5__name}>Отслеживайте заказы</span></h3>
            </div>


            <div className={s.step6__paragraph}>
                <p>Вы можете отслеживать активные заказы, а также видеть предыдущие</p>
            </div>

            <div className={s.step6__img}>
                <img src={stepSix} alt="stepSix"/>
            </div>


            <div className={s.step6__points}>
                <span className={s.span__one}></span>
                <span className={s.span__two}></span>
                <span className={s.span__three}></span>
            </div>
        </div>
    );
};

export default Step6;
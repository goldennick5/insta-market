import React from 'react';
import s from "./steps.module.scss";
import stepSeven from "../../../assets/images/WelcomePage/stepSeven.svg";

const Step7 = (props) => {
    return (
        <div className={s.step7_container}>
            <div className={s.step7__title}>
                <h3><span className={s.step5__name}>Совершайте оплату <br/> в один клик!</span></h3>
            </div>

            <div className={s.step7__img}>
                <img src={stepSeven} alt="stepSix"/>
            </div>

            <div className={s.step7__points}>
                <span className={s.span__one}></span>
                <span className={s.span__two}></span>
                <span className={s.span__three}></span>
            </div>
        </div>
    );
};

export default Step7;
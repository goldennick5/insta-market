import React from 'react';
import s from './steps.module.scss';
import stepFive from '../../../assets/images/WelcomePage/stepFive.png';
import stepFiveHello from '../../../assets/images/WelcomePage/Привет.png';

const Step5 = (props) => {

    return (
        <div className={s.step5_container}>
            <div className={s.step5__title}>
                <h3><span className={s.step5__name}>{props.signUpName}</span>, добро пожаловать</h3>
            </div>

            <div className={s.step5__img}>
                <img src={stepFive} alt="stepFive"/>
            </div>

            <div className={s.step5__points}>
                <span className={s.span__one}></span>
                <span className={s.span__two}></span>
                <span className={s.span__three}></span>
            </div>
        </div>
    );
};

export default Step5;
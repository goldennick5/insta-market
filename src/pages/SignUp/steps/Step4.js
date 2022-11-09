import s from "./steps.module.scss";
import Input from "../../../components/UI/Input/Input";
import showeye from "../../icons/showeye.svg";
import unshoweye from "../../icons/unshoweye.svg";
import React, {useState} from "react";

const Step4 = (props) => {
    const [firstShown, setFirstShown] = useState(false);
    const [secondShown, setSecondShown] = useState(false);
    const [showFirstEyeInput, setShowFirstEyeInput] = useState(false);
    const [showSecondEyeInput, setShowSecondEyeInput] = useState(false);

    function toggleFirstPassword() {
        setFirstShown(!firstShown);
    }

    function toggleSecondPassword() {
        setSecondShown(!secondShown);
    }

    const handleFirstChange = (first_text) => {
        if (first_text !== '') {
            setShowFirstEyeInput(true);
        } else {
            setShowFirstEyeInput(false);
        }
        props.handleTexttChange(first_text);
    }

    const handleSecondChange = (second_text) => {
        if (second_text !== '') {
            setShowSecondEyeInput(true);
        } else {
            setShowSecondEyeInput(false);
        }
        props.handleTexttChange(second_text);
    }

    return (
        <div>
            <div>
                <h2 className={s.title_step4}>Придумайте пароль</h2>
            </div>
            <div className={s.password__container}>
                <Input type={firstShown ? 'text' : 'password'}
                       label__focus="Пароль"
                       label="Введите пароль"
                       handleTexttChange={handleFirstChange}/>
                {showFirstEyeInput ? <button className={s.btn__first} onClick={toggleFirstPassword}>
                    {firstShown ? <img alt="showeye" src={showeye}/> : <img alt="showeye" src={unshoweye}/>}
                </button> : ''}

                <Input type={secondShown ? 'text' : 'password'}
                       label__focus="Повторите пароль"
                       label="Повторите пароль"
                       handleTexttChange={handleSecondChange}/>
                {showSecondEyeInput ? <button className={s.btn__second} onClick={toggleSecondPassword}>
                    {secondShown ? <img alt="showeye" src={showeye}/> : <img alt="showeye" src={unshoweye}/>}
                </button> : ''}
            </div>
        </div>
    )
}

export default Step4;

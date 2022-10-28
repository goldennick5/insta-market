import s from "./steps.module.scss";
import Input from "../../../components/UI/Input/Input";
import showeye from "../../icons/showeye.svg";
import unshoweye from "../../icons/unshoweye.svg";
import React, {useState} from "react";

const Step4 = () => {
    const [firstShown, setFirstShown] = useState(false);
    const [secondShown, setSecondShown] = useState(false);
    const [showFirstEyeInput, setFirstShowEyeInput] = useState(false);
    const [showSecondEyeInput, setSecondShowEyeInput] = useState(false);

    const toggleFirstPassword = () => {
        setFirstShown(!firstShown);
    }

    const toggleSecondPassword = () =>  {
        setSecondShown(!secondShown);
    }

    const handleFirstPasswordChange = (text) => {
        if (text !== '') {
            setFirstShowEyeInput(true);
        } else {
            setFirstShowEyeInput(false);
        }
    }

    const handleSecondPasswordChange = (text) => {
        if (text !== '') {
            setSecondShowEyeInput(true);
        } else {
            setSecondShowEyeInput(false);
        }
    }

    return (
        <div className={s.step4_container}>
            <div>
                <h2 className={s.title_step4}>Придумайте пароль</h2>
            </div>
            <div className={s.password__container}>
                <Input type={firstShown ? 'text' : 'password'}
                       label__focus="Пароль"
                       label="Введите пароль"
                       handleFirstPasswordChange={handleFirstPasswordChange.bind(this)}/>
                {showFirstEyeInput ? <button className={s.btn} onClick={toggleFirstPassword}>
                    {firstShown ? <img src={showeye}/> : <img src={unshoweye}/>}
                </button> : ''}

                <Input type={secondShown ? 'text' : 'password'}
                       label__focus="Пароль"
                       label="Введите пароль"
                       handleSecondPasswordChange={handleSecondPasswordChange}/>
                {showSecondEyeInput ? <button className={s.btn} onClick={toggleSecondPassword}>
                    {secondShown ? <img src={showeye}/> : <img src={unshoweye}/>}
                </button> : ''}
            </div>
        </div>
    )
}

export default Step4;

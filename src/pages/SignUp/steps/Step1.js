import Input from "../../../components/UI/Input/Input";
import s from "./steps.module.scss";
import React, {useState} from 'react';

const Step1 = (props) => {

    const handleTextOne = (text) => {
        props.handleTexttChange(text);
    }

    return (
        <div>
            <div>
                <h2 className={s.title_step1}>Подскажите<br/>Ваш номер телефона</h2>
            </div>
            <Input label__focus="Номер телефона"
                   label="Введите номер телефона"
                   handleTexttChange={handleTextOne}/>
        </div>
    )
}

export default Step1;

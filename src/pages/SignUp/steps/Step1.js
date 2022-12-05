import Input from "../../../components/UI/Input/Input";
import s from "./steps.module.scss";
import React from 'react';

const Step1 = (props) => {

    const handleTextOne = (text) => {
        props.handleTextChange(text);
    }

    return (
        <div>
            <div>
                <h2 className={s.title_step1}>Подскажите<br/>Ваш номер телефона</h2>
            </div>
            <Input label__focus="Номер телефона"
                   label="Введите номер телефона"
                   handleTextChange={handleTextOne}
                    value={props.value}/>
        </div>
    )
}

export default Step1;

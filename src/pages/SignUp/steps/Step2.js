import s from "./steps.module.scss";
import Input from "../../../components/UI/Input/Input";
import React, {useState} from "react";

const Step2 = (props) => {
    const [nameError, setNameError] = useState(false);

    const handleTextTwo = (text) => {
        props.handleTexttChange(text);
        setTimeout(() => {
            if(text.length < 4) {
                setNameError(true);
            } else if(text.length == 0) {
                setNameError(false);
            } else {
                setNameError(false);
            }
        }, 200)
    }

    return (
        <div>
            <div>
                <h2 className={s.title_step2}>Расскажите<br/>немного о себе</h2>
            </div>
            <Input label__focus="Имя"
                   label="Введите имя"
                   handleTexttChange={handleTextTwo}/>
            {nameError ? <div className={s.warning_step2}>Недостаточно символов</div> : null}
        </div>
    )
}

export default Step2;

import Input from "../../../components/UI/Input/Input";
import s from "./steps.module.scss";

const Step1 = () => {
    return (
        <div>
            <div>
                <h2 className={s.title_step1}>Подскажите<br/>Ваш номер телефона</h2>
            </div>
            <Input label__focus="Номер телефона" label="Введите номер телефона"/>
        </div>
    )
}

export default Step1;

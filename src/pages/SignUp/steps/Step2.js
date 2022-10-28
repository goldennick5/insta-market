import s from "./steps.module.scss";
import Input from "../../../components/UI/Input/Input";

const Step2 = () => {
    return (
        <div>
            <div>
                <h2 className={s.title_step2}>Расскажите<br/>немного о себе</h2>
            </div>
            <Input label__focus="Имя" label="Введите имя"/>
        </div>
    )
}

export default Step2;

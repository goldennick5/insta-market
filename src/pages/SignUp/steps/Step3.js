import s from "./steps.module.scss";
import Input from "../../../components/UI/Input/Input";

const Step3 = (props) => {
    const handleTextTwo = (text) => {
        props.handleTexttChange(text);
    }

    return (
        <div>
            <div>
                <h2 className={s.title_step3}>И ваш адрес<br/>электронной почты?</h2>
            </div>
            <div>
                <p className={s.paragraph_step3}>Мы будем уведомлять Вас<br/>о важных событиях и изменениях</p>
            </div>
            <Input label__focus="Email"
                   label="Введите e-mail"
                   handleTexttChange={handleTextTwo}/>
        </div>
    )
}

export default Step3;

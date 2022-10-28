import React, {useState} from 'react';
import Wrapper from "../../components/UI/Wrapper/Wrapper";
import s from "../SignIn/SignIn.module.scss";
import Input from "../../components/UI/Input/Input";
import Step1 from "./steps/Step1";


const Step2 = () => {
    return (
        <p>step 2</p>
    )
}
const Step3 = () => {
    return (
        <p>step 3</p>
    )
}

function SignUp() {
    const [step, setStep] = useState(1)
    return (
        <div className={s.form}>
            <Wrapper>
                {step === 1 && <Step1 />}
                {step === 2 && <Step2 />}
                {step === 3 && <Step3 />}
                {/*<div style={{marginTop: '18px'}}>*/}
                {/*    <div>*/}
                {/*        <h2 className={s.title}>Подскажите<br/>Номер телефона</h2>*/}
                {/*    </div>*/}
                {/*    <Input label__focus="Номер телефона" label="Введите номер телефона"/>*/}
                {/*</div>*/}
            </Wrapper>
            <button onClick={() => setStep(step + 1)}>next</button>
        </div>
    );
}

export default SignUp;

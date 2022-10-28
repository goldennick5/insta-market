import React, {useState} from 'react';
import Wrapper from "../../components/UI/Wrapper/Wrapper";
import s from "./SignUp.module.scss";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Button from "../../components/UI/button/Button";

function SignUp() {
    const [step, setStep] = useState(1)

    function handleStepsUp(){
        setStep(step + 1);
    }

    return (
        <div className={s.form}>
            <Wrapper>
                <div className={s.subform}>
                    {step === 1 && <Step1 />}
                    {step === 2 && <Step2 />}
                    {step === 3 && <Step3 />}
                    {step === 4 && <Step4 /> }
                </div>
            </Wrapper>
            <div className={s.btn__container}>
                <Button handleStepsUp={handleStepsUp}
                        color={'btnBlue'}
                        name='Продолжить'/>
                <Button onClick={() => setStep(step + 1)}
                        color={'btnNoColor'}
                        name='Вернуться в витрину'
                        class={'btn'}/>
            </div>
        </div>
    );
}

export default SignUp;

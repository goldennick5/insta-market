import React from 'react';
import Wrapper from "../components/UI/Wrapper/Wrapper";
import s from "./SignIn.module.scss";
import Input from "../components/UI/Input/Input";

function SignUp() {
    return (
        <div className={s.form}>
            <Wrapper>
                <div style={{marginTop: '18px'}}>
                    <div>
                        <h2 className={s.title}>Подскажите<br/>Номер телефона</h2>
                    </div>
                    <Input label__focus="Номер телефона" label="Введите номер телефона"/>
                </div>
            </Wrapper>
        </div>
    );
}

export default SignUp;

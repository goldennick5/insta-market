import React from 'react';
import Wrapper from "../components/UI/Wrapper/Wrapper";
import Input from '../components/UI/Input/Input';
import s from './SignIn.module.scss';

function SignIn() {
    return (
        <div className={s.form}>
            <Wrapper>
                <div style={{marginTop: '18px'}}>
                    <div>
                        <h2 className={s.title}>Привет!</h2>
                    </div>
                    <Input label__focus="Номер телефона" label="Введите номер телефона"/>
                    <Input label__focus="Пароль" label="Введите пароль"/>
                </div>
            </Wrapper>
        </div>
    )
}

export default SignIn

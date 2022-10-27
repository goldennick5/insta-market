import React, {useState} from 'react';
import Wrapper from "../components/UI/Wrapper/Wrapper";
import Input from '../components/UI/Input/Input';
import s from './SignIn.module.scss';
import showeye from './icons/showeye.svg';
import unshoweye from './icons/unshoweye.svg';

function SignIn() {
    const [shown, setShown] = useState(false);
    const [showEyeInput, setShowEyeInput] = useState(false);

    function togglePassword() {
        setShown(!shown);
    }

    function handleTexttChange(text) {
        if (text !== '') {
            setShowEyeInput(true);
        } else {
            setShowEyeInput(false);
        }
    }

    return (
        <div className={s.form}>
            <Wrapper>
                <div style={{marginTop: '18px'}}>
                    <div>
                        <h2 className={s.title}>Привет!</h2>
                    </div>
                    <Input label__focus="Номер телефона" label="Введите номер телефона"/>
                    <div className={s.password__container}>
                        <Input type={shown ? 'text' : 'password'}
                               label__focus="Пароль"
                               label="Введите пароль"
                               handleTexttChange={handleTexttChange}/>
                        {showEyeInput ? <button className={s.btn} onClick={togglePassword}>
                            {shown ? <img src={showeye}/> : <img src={unshoweye}/>}
                        </button> : ''}
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default SignIn

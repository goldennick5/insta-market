import React, {useState} from 'react';
import {connect} from "react-redux";
import Wrapper from "../../components/UI/Wrapper/Wrapper";
import Input from '../../components/UI/Input/Input';
import {enterSignInValues} from "../../store/reducers/loginReducer";
import Button from "../../components/UI/button/Button";
import Header from "../../components/UI/header/Header";
import s from './SignIn.module.scss';
import showeye from '../icons/showeye.svg';
import unshoweye from '../icons/unshoweye.svg';

function SignIn(props) {
    const [shown, setShown] = useState(false);
    const [showEyeInput, setShowEyeInput] = useState(false);

    function togglePassword() {
        setShown(!shown);
    }

    const handlePhoneNum = (value) => {
        props.enterPhoneNum(value);
    }

    const handlePassword = (value) => {
        if (value !== '') {
            setShowEyeInput(true);
        } else {
            setShowEyeInput(false);
        }
        props.enterPassword(value);
    }

    return (
        <div className={s.form}>
            <Header/>
            <Wrapper>
                <div className={s.subform}>
                    <div>
                        <h2 className={s.title}>Привет!</h2>
                    </div>
                    <Input handleTextChange={handlePhoneNum} label__focus="Номер телефона" label="Введите номер телефона"/>
                    <div className={s.password__container}>
                        <Input type={shown ? 'text' : 'password'}
                               label__focus="Пароль"
                               label="Введите пароль"
                               handleTextChange={handlePassword}/>
                        {showEyeInput ? <button className={s.btn} onClick={togglePassword}>
                            {shown ? <img alt="" src={showeye}/> : <img alt="" src={unshoweye}/>}
                        </button> : ''}
                    </div>
                </div>
            </Wrapper>
            <div className={s.btn__container}>
                <Button color={'btnBlue'}
                        name='Войти'/>
                <Button color={'btnNoColor'}
                        name='Вернуться в витрину'
                        class={'btn'}/>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    phoneNumber: state.login.values.phoneNumber,
    password: state.login.values.password,
})

const mapDispatchToProps = (dispatch) => ({
    enterPhoneNum: (value) => {
        dispatch(enterSignInValues({
            phoneNumber: value
        }))
    },
    enterPassword: (value) => {
        dispatch(enterSignInValues({
            password: value
        }))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)


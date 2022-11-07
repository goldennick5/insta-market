import React, {useState} from 'react';
import Wrapper from "../../components/UI/Wrapper/Wrapper";
import Input from '../../components/UI/Input/Input';
import s from './SignIn.module.scss';
import showeye from '../icons/showeye.svg';
import unshoweye from '../icons/unshoweye.svg';
import {connect} from "react-redux";
import {changeMsg, showInfo} from "../../store/reducers/loginReducer";
import Button from "../../components/UI/button/Button";

function SignIn(props) {
    const [shown, setShown] = useState(false);
    const [showEyeInput, setShowEyeInput] = useState(false);

    function togglePassword() {
        setShown(!shown);
    }

    const handleTexttChange = (text) => {
        if (text !== '') {
            setShowEyeInput(true);
        } else {
            setShowEyeInput(false);
        }
    }

    return (
        <div className={s.form}>
            <Wrapper>
                <div className={s.subform}>
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
                            {shown ? <img alt=""src={showeye}/> : <img alt=""src={unshoweye}/>}
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
    signInData: state.login
})

const mapDispatchToProps = (dispatch) => ({
     showInfo: () => {
         dispatch(showInfo())
     },
     changeMsg: (msg) => {
         dispatch(changeMsg(msg))
     }
 })


export default connect(mapStateToProps, mapDispatchToProps)(SignIn)

// function connect(mapStateToProps, mapDispatchToProps) {
//     state
//     return (SignIn) => {
//         <Wrapper>
//             <SignIn props={state.signInData}/>
//         </Wrapper>
//     }
// }
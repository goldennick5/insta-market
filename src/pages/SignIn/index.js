import React, {useState} from 'react';
import Wrapper from "../../components/UI/Wrapper/Wrapper";
import Input from '../../components/UI/Input/Input';
import s from './SignIn.module.scss';
import showeye from '../icons/showeye.svg';
import unshoweye from '../icons/unshoweye.svg';
import {connect} from "react-redux";
import {changeMsg, showInfo} from "../../store/reducers/authReducer";

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

    const changeText = () => {
        props.changeMsg('HELLO!')
    }

    return (
        <div className={s.form}>
            <Wrapper>
                <div style={{marginTop: '18px'}}>
                    <div>
                        <h2 className={s.title}>Привет!</h2>
                    </div>
                    <Input value={props.signInData.phoneNumber} label__focus="Номер телефона" label="Введите номер телефона"/>
                    <div className={s.password__container}>
                        <Input value={props.signInData.password} type={shown ? 'text' : 'password'}
                               label__focus="Пароль"
                               label="Введите пароль"
                               handleTexttChange={handleTexttChange}/>
                        {showEyeInput ? <button className={s.btn} onClick={togglePassword}>
                            {shown ? <img alt=""src={showeye}/> : <img alt=""src={unshoweye}/>}
                        </button> : ''}
                    </div>
                </div>
                {
                    props.signInData.showInfo && <p>{props.signInData.msg}</p>
                }
            </Wrapper>
            <button onClick={props.showInfo}>click me</button>
            <button onClick={changeText}>change msg</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    signInData: state.auth
})

// const mapDispatchToProps = (dispatch) => ({
//     showInfo: () => {
//         dispatch(showInfo())
//     },
//     changeMsg: (msg) => {
//         dispatch(changeMsg(msg))
//     }
// })


export default connect(mapStateToProps, {showInfo, changeMsg})(SignIn)

// function connect(mapStateToProps, mapDispatchToProps) {
//     state
//     return (SignIn) => {
//         <Wrapper>
//             <SignIn props={state.signInData}/>
//         </Wrapper>
//     }
// }
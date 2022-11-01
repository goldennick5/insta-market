import React, {useEffect, useState} from 'react';
import Wrapper from "../../components/UI/Wrapper/Wrapper";
import s from "./SignUp.module.scss";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Button from "../../components/UI/button/Button";
import {connect} from "react-redux";
import {enterPhoneNum,enterEmail, enterName, enterPassword, incrementStep} from "../../store/reducers/signUpReducer";

function SignUp(props) {
    const [disable, setDisable] = useState(true);

    const handleStepsUp = () => {
        props.incrementStep();
        setDisable(!disable);
    }

    const enterPhoneNum = (value) => {
        props.enterPhoneNum(value);
        if(value !== ''){
            setDisable(false);
        } else{
            setDisable(true);
        }
    }

    const enterName = (value) => {
        props.enterName(value);
        if(value !== ''){
            setDisable(false);
        } else {
            setDisable(true);
        }
    }

    const enterEmail = (value) => {
        props.enterEmail(value);
        if(value !== ''){
            setDisable(false);
        } else {
            setDisable(true);
        }
    }

    const enterPassword = (value) => {
        props.enterPassword(value);
        if(value !== ''){
            setDisable(false);
        } else {
            setDisable(true);
        }
    }


    return (
        <div className={s.form}>
            <Wrapper>
                <div className={s.subform}>
                    {props.signUpData === 1 && <Step1 handleTexttChange={enterPhoneNum}/>}
                    {props.signUpData === 2 && <Step2 handleTexttChange={enterName}/>}
                    {props.signUpData === 3 && <Step3 handleTexttChange={enterEmail}/>}
                    {props.signUpData === 4 && <Step4 handleTexttChange={enterPassword}/>}
                </div>
            </Wrapper>
            <div className={s.btn__container}>
                <Button color={'btnBlue'}
                        name='Продолжить'
                        disable={disable}
                        sumStepUpAndDisableBtn={handleStepsUp}/>
                <Button color={'btnNoColor'}
                        name='Вернуться в витрину'
                        class={'btn'}/>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    signUpData: state.signup.step,
    signUpPhoneNum: state.signup.values.phoneNum,
    signUpName: state.signup.values.name,
    signUpEmail: state.signup.values.email,
    signUpPassword: state.signup.values.password,
})

const mapDispatchToProps = (dispatch) => ({
    incrementStep: () => {
        dispatch(incrementStep())
    },
    enterPhoneNum: (value) => {
        dispatch(enterPhoneNum(value))
    },
    enterName: (value) => {
        dispatch(enterName(value))
    },
    enterEmail: (value) => {
        dispatch(enterEmail(value))
    },
    enterPassword: (value) => {
        dispatch(enterPassword(value))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)

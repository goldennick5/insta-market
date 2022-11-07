import React, {useEffect, useState} from 'react';
import Wrapper from "../../components/UI/Wrapper/Wrapper";
import s from "./SignUp.module.scss";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Step5 from "./steps/Step5";
import Step6 from "./steps/Step6";
import Step7 from "./steps/Step7";
import WelcomeWrapper from "../../components/UI/Wrapper/WelcomeWrapper";
import Button from "../../components/UI/button/Button";
import loadingImg from "../../assets/images/Loading/Frame.svg";
import {connect} from "react-redux";
import {enterValues, incrementStep, decrementStep} from "../../store/reducers/signUpReducer";
import Header from "../../components/UI/header/Header";

function SignUp(props) {
    const [disable, setDisable] = useState(true);
    const [finish, setFinish] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleStepsUp = () => {
        props.incrementStep();
        setDisable(!disable);
    }

    const handleStepsBack = () => {
        props.decrementStep();
    }

    const toggleFinish = () => {
        props.incrementStep();
        setFinish(true);
        setLoading(true);
    }

    const enterPhoneNum = (value) => {
        props.enterPhoneNum(value);
        if (value !== '') {
            setDisable(false);
        } else {
            setDisable(true);
        }
    }

    const enterName = (value) => {
        props.enterName(value);
        if (value !== '') {
            setDisable(false);
        } else {
            setDisable(true);
        }
    }

    const enterEmail = (value) => {
        props.enterEmail(value);
        if (value !== '') {
            setDisable(false);
        } else {
            setDisable(true);
        }
    }

    const enterPassword = (value) => {
        props.enterPassword(value);
        if (value !== '') {
            setDisable(false);
        } else {
            setDisable(true);
        }
    }

    console.log(props.signUpData)
    console.log(props)

    return (

        <>{finish ?

            <div className={s.finish__form}>
                <Header/>
                <WelcomeWrapper>
                    <div>
                        {props.signUpData === 5 && <Step5 signUpName={props.signUpName}/>}
                        {props.signUpData === 6 && <Step6/>}
                        {props.signUpData === 7 && <Step7/>}
                    </div>
                </WelcomeWrapper>
                <div className={s.btn__container}>
                    {props.signUpData === 6 || props.signUpData === 7 ?
                        <>
                            <Button color={'btnBlue'}
                                    name='Продолжить'
                                    disable={disable}
                                    sumStepUpAndDisableBtn={toggleFinish}/>
                            <Button color={'btnNoColor'}
                                    name='Пропустить'
                                    class={'btn'}/>
                        </> :
                        <>
                            <Button color={'btnBlue'}
                                    name='Продолжить'
                                    disable={disable}
                                    sumStepUpAndDisableBtn={toggleFinish}/>
                            <Button color={'btnNoColor'}
                                    name='Вернуться на ветрину'
                                    class={'btn'}/>
                        </>}
                </div>
            </div>
            :
            <div className={s.form}>
                <Header handleStepsBack={handleStepsBack} signUpData={props.signUpData}/>
                <Wrapper>
                    <div className={s.subform}>
                        {props.signUpData === 1 && <Step1 handleTexttChange={enterPhoneNum}/>}
                        {props.signUpData === 2 && <Step2 handleTexttChange={enterName}/>}
                        {props.signUpData === 3 && <Step3 handleTexttChange={enterEmail}/>}
                        {props.signUpData === 4 && <Step4 handleTexttChange={enterPassword}/>}
                    </div>
                </Wrapper>
                <div className={s.btn__container}>
                    {props.signUpData === 4 ?
                        <Button color={'btnBlue'}
                                finishedColor={'btnGrey'}
                                name='Завершить регистрацию'
                                sumStepUpAndDisableBtn={toggleFinish}
                                finish={finish}
                                loadingImg={loadingImg}
                                disable={disable}/>
                        :
                        <Button color={'btnBlue'}
                                name='Продолжить'
                                disable={disable}
                                sumStepUpAndDisableBtn={handleStepsUp}/>}
                    <Button color={'btnNoColor'}
                            name='Вернуться в витрину'
                            class={'btn'}/>
                </div>
            </div>
        }</>

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
    decrementStep: () => {
        dispatch(decrementStep())
    },
    enterPhoneNum: (value) => {
        dispatch(enterValues({
            phoneNum: value
        }))
    },
    enterName: (value) => {
        dispatch(enterValues({
            name: value
        }))
    },
    enterEmail: (value) => {
        dispatch(enterValues({
            email: value
        }))
    },
    enterPassword: (value) => {
        dispatch(enterValues({
            password: value
        }))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)

import React, {useState} from 'react';
import Wrapper from "../../components/UI/Wrapper/Wrapper";
import s from "./SignUp.module.scss";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Button from "../../components/UI/button/Button";
import {connect, useDispatch, useSelector} from "react-redux";
import {goStep, incrementStep} from "../../store/reducers/signUpReducer";

function SignUp(props) {
    const step = useSelector(state => state.step);
    console.log(step)

    function handleStepsUp(){
        props.incrementStep()
    }

    return (
        <div className={s.form}>
            <Wrapper>
                <div className={s.subform}>
                    {props.signUpData === 1 && <Step1 />}
                    {props.signUpData === 2 && <Step2 />}
                    {props.signUpData === 3 && <Step3 />}
                    {props.signUpData === 4 && <Step4 /> }
                </div>
            </Wrapper>
            <div className={s.btn__container}>
                <Button handleStepsUp={handleStepsUp}
                        color={'btnBlue'}
                        name='Продолжить'/>
                <Button color={'btnNoColor'}
                        name='Вернуться в витрину'
                        class={'btn'}/>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    signUpData: state.signup.step
})

const mapDispatchToProps = (dispatch) => ({
    incrementStep: () => {
        dispatch(incrementStep())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)

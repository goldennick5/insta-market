import React from 'react';
import stepFive from "../../../assets/images/WelcomePage/stepFive.png";

const Step5 = (props) => {
    return (
        <div>
            <h2>{props.signUpName}, добро пожаловать</h2>
            <div>
                <img src={stepFive} alt="step-five"/>
            </div>
        </div>
    );
};

export default Step5;
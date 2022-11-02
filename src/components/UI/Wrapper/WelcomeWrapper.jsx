import React from 'react';
import wrapper from "./WelcomeWrapper.module.scss"

const WelcomeWrapper = (props) => {
    return (
        <div className={wrapper.wrapper}>
            {props.children}
        </div>
    );
};

export default WelcomeWrapper;
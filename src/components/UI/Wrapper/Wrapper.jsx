import React from 'react';
import wrapper from './Wrapper.module.scss';
import Switch from "./Switch/Switch";

const Wrapper = (props) => {
    return (
        <div className={wrapper.wrapper}>
            <Switch/>
            {props.children}
        </div>
    );
};

export default Wrapper;

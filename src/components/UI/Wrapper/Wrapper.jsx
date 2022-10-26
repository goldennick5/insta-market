import React from 'react';
import wrapper from './Wrapper.module.scss';
import Switch from "./Switch/Switch";

const Wrapper = () => {
    return (
        <div className={wrapper.wrapper}>
            <Switch/>
        </div>
    );
};

export default Wrapper;

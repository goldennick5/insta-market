import React from 'react';
import s from './OutletWrapper.module.scss';

const OutletWrapper = (props) => {
    return (
        <div className={s.order}>
            {props.children}
        </div>
    );
};

export default OutletWrapper;
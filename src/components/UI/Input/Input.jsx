import React, {useState} from 'react';
import './Input.scss';

const Input = (props) => {
    const [isLabel, setIsLabel] = useState(false);

    function toggleLabel(){
        return setIsLabel(!isLabel);
    }

    return (
        <form>
            <div className="input-form">
                <input type="input" {...props} onBlur={toggleLabel} onFocus={toggleLabel} name="input" required/>
                <label htmlFor="input">{isLabel ? props.label__focus : props.label}</label>
            </div>
        </form>
    );
};

export default Input;

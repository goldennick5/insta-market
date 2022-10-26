import React, {useState} from 'react';
import './Input.scss';
// import input from "./Input";

const Input = (props) => {
    const [isLabel, setIsLabel] = useState(false);
    const [value, setValue] = useState('');

    function handleTextChange(text) {
        setValue(text);
        if(text !== ''){
            setIsLabel(true);
        } else {
            setIsLabel(false);
        }
    }

    return (
        <form>
            <div className="input-form">
                <input type="text" {...props}
                       value={value}
                       name="input" required
                       onChange={(e) => handleTextChange(e.target.value)}
                       />
                <label htmlFor="input">{isLabel ? props.label__focus : props.label}</label>
            </div>
        </form>
    );
};

export default Input;

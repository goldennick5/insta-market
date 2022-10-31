import React, {useState} from 'react';
import './Input.scss';

const Input = (props) => {
    const [isLabel, setIsLabel] = useState(false);
    const [value, setValue] = useState( '');

    const handleTextChange = (text) => {
        setValue(text);
        if(text !== ''){
            setIsLabel(true);
        } else {
            setIsLabel(false);
        }
        props.handleTexttChange(text);
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

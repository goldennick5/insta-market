import React, {useState} from 'react';
import './Input.scss';

const Input = (props) => {
    const [isLabel, setIsLabel] = useState(false);
    const [value, setValue] = useState( '');

    const handleTextChange = (e) => {
        setValue(props.value);
        if(e.target.value !== ''){
            setIsLabel(true);
        } else {
            setIsLabel(false);
        }
        props.handleTexttChange(e.target.value);
    }

    return (
        <form>
            <div className="input-form">
                <input type="text" {...props}
                       value={value}
                       name="input" required
                       onChange={handleTextChange}/>
                <label htmlFor="input">{isLabel ? props.label__focus : props.label}</label>
            </div>
        </form>
    );
};

export default Input;

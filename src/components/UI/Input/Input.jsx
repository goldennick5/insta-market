import React, {useState} from 'react';
import './Input.scss';

const Input = (props) => {
    const [isLabel, setIsLabel] = useState(false);

    const handleTextChange = (e) => {
        if(e.target.value !== ''){
            setIsLabel(true);
        } else {
            setIsLabel(false);
        }
        props.handleTextChange(e.target.value);
    }

    return (
        <form>
            <div className="input-form">
                <input type="text" {...props}
                       value={props.value}
                       name="input" required
                       onChange={handleTextChange}/>
                <label htmlFor="input">{isLabel ? props.label__focus : props.label}</label>
            </div>
        </form>
    );
};

export default Input;

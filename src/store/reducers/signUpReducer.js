const INCREMENT__STEPS = "INCREMENT__STEPS";
const ENTER__PHONE__NUMBER = "ENTER__PHONE__NUMBER";
const ENTER__NAME = "ENTER__NAME";
const ENTER__EMAIL = "ENTER__EMAIL";
const ENTER__PASSWORD = "ENTER__PASSWORD";

//Initial state
const initState = {
    step: 1,
    values: {
        phoneNum: '',
        name: '',
        email: '',
        password: '',
    }
}

//Reducer
const signUpReducer = (state = initState, action) => {
    switch (action.type) {
        case INCREMENT__STEPS:
            return {...state, step: state.step + 1}
        case ENTER__PHONE__NUMBER:
            return {...state, values : {phoneNum: action.payload}}
        case ENTER__NAME:
            return {...state, values: {name: action.payload}}
        case ENTER__EMAIL:
            return {...state, values: {email: action.payload}}
        case ENTER__PASSWORD:
            return {...state, values: {password: action.payload}}
        default: {
            return {...state}
        }
    }
}

//Action creators
export const incrementStep = () => (
    {
        type: INCREMENT__STEPS
    }
)

export const enterPhoneNum = (value) => (
    {
        type: ENTER__PHONE__NUMBER,
        payload: value
    }
)

export const enterName = (value) => (
    {
        type: ENTER__NAME,
        payload: value
    }
)

export const enterEmail = (value) => (
    {
        type: ENTER__EMAIL,
        payload: value
    }
)

export const enterPassword = (value) => (
    {
        type: ENTER__PASSWORD,
        payload: value
    }
)

export default signUpReducer;

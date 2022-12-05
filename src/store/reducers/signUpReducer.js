const INCREMENT__STEPS = "INCREMENT__STEPS";
const ENTER__SIGNUP__VALUES = "ENTER__SIGNUP__VALUES";
const DECREMENT__STEPS = "DECREMENT__STEPS";

const initState = {
    step: 1,
    values: {
        phoneNum: '',
        name: '',
        email: '',
        password: '',
    }
}

const signUpReducer = (state = initState, action) => {
    switch (action.type) {
        case INCREMENT__STEPS:
            return {...state, step: state.step + 1}
        case DECREMENT__STEPS:
            return {...state, step: state.step - 1}
        case ENTER__SIGNUP__VALUES:
            return {...state, values : {...state.values,...action.payload}}
        default: {
            return {...state}
        }
    }
}

export const incrementStep = () => (
    {
        type: INCREMENT__STEPS
    }
)

export const decrementStep = () => (
    {
        type: DECREMENT__STEPS
    }
)

export const enterValues = (value) => (
    {
        type: ENTER__SIGNUP__VALUES,
        payload: value
    }
)


export default signUpReducer;

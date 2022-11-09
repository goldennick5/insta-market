const INCREMENT__STEPS = "INCREMENT__STEPS";
const ENTER__VALUES = "ENTER__VALUES";
const DECREMENT__STEPS = "DECREMENT__STEPS";

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
        case DECREMENT__STEPS:
            return {...state, step: state.step - 1}
        case ENTER__VALUES:
            return {...state, values : {...state.values,...action.payload}}
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

export const decrementStep = () => (
    {
        type: DECREMENT__STEPS
    }
)

export const enterValues = (value) => (
    {
        type: ENTER__VALUES,
        payload: value
    }
)


export default signUpReducer;

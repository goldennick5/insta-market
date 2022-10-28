const INCREMENT__STEPS = "INCREMENT__STEPS";

const initState = {
    step: 1
}

const signUpReducer = (state = initState, action) => {
    switch (action.type) {
        case INCREMENT__STEPS:
            return {...state, step: state.step + 1}
        default:
            return state
    }
}

export const incrementStep = () => (
    {
        type: INCREMENT__STEPS
    }
)

export default signUpReducer;

const STEPS = "STEPS";

const initState = {
    step: 1
}

const signUpReducer = (state = initState, action) => {
    switch (action.type) {
        case "STEPS":
            return {...state, step: state.step + 1}
        default:
            return state
    }
}

export const goStep = () => (
    {
        type: STEPS
    }
)

export default signUpReducer;

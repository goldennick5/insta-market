const ENTER__SIGNIN__VALUES = "ENTER__SIGNIN__VALUES";

const initState = {
    values: {
        phoneNumber: '',
        password: '',
    }
}

const loginReducer = (state = initState, action) => {
    switch (action.type) {
        case ENTER__SIGNIN__VALUES:
            return {...state, values: {...state.values, ...action.payload}}
        default:
            return state
    }
}


export const enterSignInValues = (value) => (
    {
        type: ENTER__SIGNIN__VALUES,
        payload: value
    }
)

export default loginReducer;

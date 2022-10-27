const SHOW_INFO = "SHOW_INFO"
const CHANGE_MSG = "CHANGE_MSG"

const initState = {
    phoneNumber: '873',
    password: '222111',
    showInfo: false,
    msg: "!!!!"
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case SHOW_INFO:
            return {...state, showInfo: true}
        case CHANGE_MSG:
            return {...state, msg: action.msg}
        default:
            return state
    }
}


export const showInfo = () => (
    {
        type: SHOW_INFO
    }
)
export const changeMsg = (msg) => (
    {
        type: CHANGE_MSG,
        msg
    }
)

export default authReducer;

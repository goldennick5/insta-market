const ENTER__CARD__VALUES = "ENTER__CARD__VALUES";
const ADD__CARD = "ADD__CARD";

let nextCardId = 0;

const initState = {
    cards: [],
    values: {
        cardNumber: '',
        validityPeriod: '',
        cvCode: ''
    }
}

const cardsReducer = (state = initState, action) => {
    switch (action.type) {
        case ENTER__CARD__VALUES:
            return {...state, values: {...state.values, ...action.payload}}
        case ADD__CARD:
            return {...state, cards: [...state.cards, state.values]}
        default: {
            return state;
        }
    }
}

export const enterCardValues = (value) => (
    {
        type: ENTER__CARD__VALUES,
        payload: value
    }
)

export const addCard = () => ({
    type: ADD__CARD,
})

export default cardsReducer;
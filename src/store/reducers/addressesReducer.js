const ENTER__ADDRESS__VALUES = "ENTER__ADDRESS__VALUES";
const ADD__ADDRESS = "ADD__ADDRESS";
const DELETE__ADDRESS = "DELETE__ADDRESS";

const initState = {
    addresses: [],
    values: {
        id: 0,
        addressName: '',
        city: '',
        street: '',
        homeNum: '',
        officeNum: '',
        comment: ''
    },
    newId: 0,
    newAddressName: '',
    newCity: '',
    newStreet: '',
    newHomeNum: '',
    newOfficeNum: '',
    newComment: ''
};

const addressesReducer = (state = initState, action) => {
    switch (action.type) {
        case ENTER__ADDRESS__VALUES:
            return {...state, values: {...state.values, ...action.payload}};
        case ADD__ADDRESS:
            let newState = {...state};
            let id = newState.newId++;
            newState.newAddressName = newState.values.addressName;
            newState.newCity = newState.values.city;
            newState.newStreet = newState.values.street;
            newState.newHomeNum = newState.values.homeNum;
            newState.newOfficeNum = newState.values.officeNum;
            newState.newComment = newState.values.comment;
            const address = {
                id,
                addressName: newState.newAddressName,
                city: newState.newCity,
                street: newState.newStreet,
                homeNum: newState.newHomeNum,
                officeNum: newState.newOfficeNum,
                comment: newState.newComment,
            }
            newState.addresses = [...state.addresses];
            newState.addresses.push(address);
            return newState;
        case DELETE__ADDRESS:
            const addressId = action.index;
            return {...state, addresses: state.addresses.filter((val) => val.id !== addressId)};
        default:
            return state;
    }
}

export const enterAddressesValues = (value) => (
    {
        type: ENTER__ADDRESS__VALUES,
        payload: value
    }
)

export const addAddress = () => ({
    type: ADD__ADDRESS,
})

export const deleteAddress = (index) => ({
    type: DELETE__ADDRESS,
    index
})

export default addressesReducer;

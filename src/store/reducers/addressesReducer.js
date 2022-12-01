const ENTER__ADDRESS__VALUES = "ENTER__ADDRESS__VALUES";
const ADD__ADDRESS = "ADD__ADDRESS";
const DELETE__ADDRESS = "DELETE__ADDRESS";
const UPDATE__ADDRESS = "UPDATE__ADDRESS";
const EDIT__ADDRESS = "EDIT__ADDRESS";

const initState = {
    addresses: [],
    values: {
        id: 0,
        addressName: '',
        city: '',
        street: '',
        homeNum: '',
        officeNum: '',
        comment: '',
    },
    newId: 0,
    newAddressName: '',
    newCity: '',
    newStreet: '',
    newHomeNum: '',
    newOfficeNum: '',
    newComment: '',
    currentId: 0
};

const addressesReducer = (state = initState, action) => {
    switch (action.type) {
        case ENTER__ADDRESS__VALUES:
            return {...state, values: {...state.values, ...action.payload}};
        case ADD__ADDRESS:
            let newState = {...state};
            let id = ++newState.newId;
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
            newState.values.addressName = '';
            newState.values.city = '';
            newState.values.street = '';
            newState.values.homeNum = '';
            newState.values.officeNum = '';
            newState.values.comment = '';
            return newState;
        case DELETE__ADDRESS:
            const addressId = action.index;
            return {...state, addresses: state.addresses.filter((val) => val.id !== addressId)};
        case UPDATE__ADDRESS:
            let newUpdatedState = {...state};
            newUpdatedState.addresses.forEach((address) => {
                if(address.id === action.payload){
                    newUpdatedState.values.addressName = address.addressName;
                    newUpdatedState.values.city = address.city;
                    newUpdatedState.values.street = address.street;
                    newUpdatedState.values.homeNum = address.homeNum;
                    newUpdatedState.values.officeNum = address.officeNum;
                    newUpdatedState.values.comment = address.comment;
                }
            })
            newUpdatedState.currentId = action.payload;
            console.log(newUpdatedState.currentId);
            return newUpdatedState;
        case EDIT__ADDRESS:
            let newEditState = {...state, addresses: state.addresses.map((i) => ({...i}))}
            let newAddressObject = {
                //id: newEditState.values.currentId,
                addressName: newEditState.values.addressName,
                city: newEditState.values.city,
                street: newEditState.values.street,
                homeNum: newEditState.values.homeNum,
                officeNum: newEditState.values.officeNum,
                comment: newEditState.values.comment
            }
            newEditState.addresses.splice(action.index - 1, 1, newAddressObject);
            newAddressObject.id = newEditState.currentId;
            newEditState.values.addressName = '';
            newEditState.values.city = '';
            newEditState.values.street = '';
            newEditState.values.homeNum = '';
            newEditState.values.officeNum = '';
            newEditState.values.comment = '';
            console.log(newEditState.currentId);
            return newEditState;
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

export const updateAddress = (index) => ({
    type: UPDATE__ADDRESS,
    payload: index
})

export const editAddress = (index) => ({
    type: EDIT__ADDRESS,
    index
})

export default addressesReducer;

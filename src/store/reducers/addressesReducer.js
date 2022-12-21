const ENTER__ADDRESS__VALUES = "ENTER__ADDRESS__VALUES";
const ADD__ADDRESS = "ADD__ADDRESS";
const DELETE__ADDRESS = "DELETE__ADDRESS";
const DETAILS__ADDRESS = "DETAILS__ADDRESS";
const EDIT__ADDRESS = "EDIT__ADDRESS";
const CLEAR__INPUTS = "CLEAR__INPUTS";

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
    currentId: 0,
    newAddressName: '',
    newCity: '',
    newStreet: '',
    newHomeNum: '',
    newOfficeNum: '',
    newComment: '',
};

const addressesReducer = (state = initState, action) => {
    switch (action.type) {
        case ENTER__ADDRESS__VALUES:
            return {...state, values: {...state.values, ...action.payload}};
        case ADD__ADDRESS:
            let newAddState = {...state};
            let id = ++newAddState.newId;
            newAddState.newAddressName = newAddState.values.addressName;
            newAddState.newCity = newAddState.values.city;
            newAddState.newStreet = newAddState.values.street;
            newAddState.newHomeNum = newAddState.values.homeNum;
            newAddState.newOfficeNum = newAddState.values.officeNum;
            newAddState.newComment = newAddState.values.comment;
            const address = {
                id,
                addressName: newAddState.newAddressName,
                city: newAddState.newCity,
                street: newAddState.newStreet,
                homeNum: newAddState.newHomeNum,
                officeNum: newAddState.newOfficeNum,
                comment: newAddState.newComment,
            }
            newAddState.addresses = [...state.addresses];
            newAddState.addresses.push(address);
            newAddState.values.addressName = '';
            newAddState.values.city = '';
            newAddState.values.street = '';
            newAddState.values.homeNum = '';
            newAddState.values.officeNum = '';
            newAddState.values.comment = '';
            return newAddState;
        case DELETE__ADDRESS:
            let newDeleteState = {...state};
            const deleteAddress = action.index;
            const newAddressState = {...newDeleteState, addresses: newDeleteState.addresses.filter((address) => address.id !== deleteAddress)};
            if(newAddressState.addresses.length === 0){
                newAddressState.newId = 0;
                newAddressState.currentId = 0;
                newAddressState.newAddressName = '';
                newAddressState.newCity = '';
                newAddressState.newStreet = '';
                newAddressState.newHomeNum = '';
                newAddressState.newOfficeNum = '';
                newAddressState.newComment = '';
            }
            return newAddressState;

        case DETAILS__ADDRESS:
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
            return newUpdatedState;
        case EDIT__ADDRESS:
            let newEditState = {...state, addresses: state.addresses.map((address) => ({...address}))}
            let newAddressObject = {
                addressName: newEditState.values.addressName,
                city: newEditState.values.city,
                street: newEditState.values.street,
                homeNum: newEditState.values.homeNum,
                officeNum: newEditState.values.officeNum,
                comment: newEditState.values.comment
            }
            newEditState.addresses.splice(action.index - 1, 1, newAddressObject);
            newAddressObject.id = newEditState.currentId; //Присвоить id объекту текущий id, иначе undefined.
            newEditState.values.addressName = '';
            newEditState.values.city = '';
            newEditState.values.street = '';
            newEditState.values.homeNum = '';
            newEditState.values.officeNum = '';
            newEditState.values.comment = '';
            return newEditState;
        case CLEAR__INPUTS:
            let newClearState = {...state};
            newClearState.values.addressName = '';
            newClearState.values.city = '';
            newClearState.values.street = '';
            newClearState.values.homeNum = '';
            newClearState.values.officeNum = '';
            newClearState.values.comment = '';
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

export const detailsAddress = (index) => ({
    type: DETAILS__ADDRESS,
    payload: index
})

export const editAddress = (index) => ({
    type: EDIT__ADDRESS,
    index
})

export const clearInputs = () => ({
    type: CLEAR__INPUTS
})

export default addressesReducer;

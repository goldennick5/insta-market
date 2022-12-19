import frame from '../../assets/images/frame.svg';

const INCREMENT__STEPS = 'INCREMENT__STEPS';
const ENTER__SIGNUP__VALUES = 'ENTER__SIGNUP__VALUES';
const DECREMENT__STEPS = 'DECREMENT__STEPS';
const UPDATE__VALUES = 'UPDATE__VALUES';
const CHANGE__PICTURE = 'CHANGE__PICTURE';

const initState = {
  step: 1,
  picture: null,
  values: {
    phoneNum: '',
    name: '',
    email: '',
    password: '',
    profilePicture: frame,
  },
};

const signUpReducer = (state = initState, action) => {
  switch (action.type) {
    case INCREMENT__STEPS:
      return { ...state, step: state.step + 1 };
    case DECREMENT__STEPS:
      return { ...state, step: state.step - 1 };
    case ENTER__SIGNUP__VALUES:
      return { ...state, values: { ...state.values, ...action.payload } };
    case UPDATE__VALUES:
      return { ...state, values: { ...state.values, ...action.payload } };
    case CHANGE__PICTURE:
      return { ...state, picture: URL.createObjectURL(action.payload) };
    default: {
      return { ...state };
    }
  }
};

export const incrementStep = () => ({
  type: INCREMENT__STEPS,
});

export const decrementStep = () => ({
  type: DECREMENT__STEPS,
});

export const enterValues = (value) => ({
  type: ENTER__SIGNUP__VALUES,
  payload: value,
});

export const updateValues = (value) => ({
  type: UPDATE__VALUES,
  payload: value,
});

export const changeImage = (image) => ({
  type: CHANGE__PICTURE,
  payload: image,
});

export default signUpReducer;

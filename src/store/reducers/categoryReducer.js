const CHANGE__CATEGORY = 'CHANGE__CATEGORY';

const initState = {
  category: 'orders',
};

const categoryReducer = (state = initState, action) => {
  switch (action.type) {
    case CHANGE__CATEGORY:
      return { ...state, category: action.payload };
    default: {
      return { ...state };
    }
  }
};

export const changeCategory = (value) => ({
  type: CHANGE__CATEGORY,
  payload: value,
});

export default categoryReducer;

const UPLOAD = 'UPLOAD';

const initState = { orders: [], current: 0, finish: 0 };

const orderReducer = (state = initState, action) => {
  switch (action.type) {
    case UPLOAD:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const uploadData = (data) => {
  let curr = 0;
  let fin = 0;
  data.forEach((element) => {
    if (element.status) {
      fin = fin + 1;
    } else {
      curr = curr + 1;
    }
  });
  return {
    type: UPLOAD,
    payload: {
      orders: data,
      current: curr,
      finish: fin,
    },
  };
};

export default orderReducer;

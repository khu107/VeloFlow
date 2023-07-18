export const ADDVALUE = 'post/Add';

export const AddValue = (payload) => {
  return {
    type: ADDVALUE,
    payload,
  };
};

const initialState = [];
const post = (state = initialState, action) => {
  switch (action.type) {
    case ADDVALUE:
      return {
        ...state,
        state: state.concat({
          ...action.payload,
        }),
      };
    default:
      return state;
  }
};
export default post;

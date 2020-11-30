import { BASE_TEST } from '../actionType';

const initialState = {
  base: {}
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case BASE_TEST:
      state.base = action.payload;
      return {
        ...state,
        base: state.base,
      };
    default:
      return state;
  }
};

export default authReducer;

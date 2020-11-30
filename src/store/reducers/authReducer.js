import { SET_USER_INFO, SET_TOKEN } from '../actionType';

const initialState = {
  auth: {},
  token: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      state.auth = action.data;
      return {
        ...state,
        auth: state.auth,
      };
    case SET_TOKEN:
      localStorage.setItem(
        'app-token',
        JSON.stringify(action.data)
      );
      state.token = action.data;
      return {
        ...state,
        token: state.token,
      }
    default:
      return state;
  }
};

export default authReducer;

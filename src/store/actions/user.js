/* eslint-disable prettier/prettier */
import { SET_USER_INFO, SET_TOKEN, SET_SOS_STATUS } from '../actionType';

export const setUserInfo = (userInfo) => (
  {
    type: SET_USER_INFO,
    payload: userInfo,
  }
);

export const setToken = (token) => (
  {
    type: SET_TOKEN,
    payload: token,
  }
);

export const setSosStatus = (status) => (
  {
    type: SET_SOS_STATUS,
    payload: status
  }
);
/* eslint-disable prettier/prettier */
import { BASE_TEST } from '../actionType';

export const baseFunction = (data) => (
  {
    type: BASE_TEST,
    payload: data,
  }
);

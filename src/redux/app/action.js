import * as types from './types';

export const setErrorMessage = (value) => ({
  type: types.SET_ERROR,
  payload: value,
});

export const resetErrorMessage= () => ({
  type: types.RESET_ERROR,
});

export const setSubmit = (value) => ({
  type: types.SET_CAN_SUBMIT,
  payload: value,
});

export const resetSubmit= () => ({
  type: types.RESET_CAN_SUBMIT,
});

export const setFlash = (type, text, isNoHead) => ({
  type: types.SET_FLASH,
  payload: {
    show: true,
    type,
    text,
    isNoHead,
  },
});

export const resetFlash = () => ({
  type: types.RESET_FLASH,
});

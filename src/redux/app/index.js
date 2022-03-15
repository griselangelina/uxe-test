import * as types from './types';

export const initialState = {
  flash: {
    show: false,
    type: '',
    text: 'aigiooo',
    isNoHead: false,
  },
  errorMessage: false,
  canSubmit: false,
};

const ACTION_HANDLERS = {
  [types.SET_FLASH]: (state, action) => {
    return {
      ...state,
      flash: action.payload,
    };
  },
  [types.RESET_FLASH]: (state) => {
    return {
      ...state,
      flash: initialState.flash,
    };
  },
  [types.SET_ERROR]: (state, action) => {
    return {
      ...state,
      errorMessage: action.payload,
    };
  },
  [types.RESET_ERROR]: (state) => {
    return {
      ...state,
      errorMessage: initialState.errorMessgae,
    };
  },
  [types.SET_CAN_SUBMIT]: (state, action) => {
    return {
      ...state,
      canSubmit: action.payload,
    };
  },
  [types.RESET_CAN_SUBMIT]: (state) => {
    return {
      ...state,
      canSubmit: initialState.canSubmit,
    };
  },
};

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};

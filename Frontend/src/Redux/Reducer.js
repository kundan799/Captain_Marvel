
import {
  GET_DATA_ERRORS,
  GET_DATA_LOADING,
  GET_DATA_SUCCESS,
} from "./ActionType";

const ProductInitial = {
  loading: false,
  error: false,
  data: [],
};

export const Reduser = (state = ProductInitial, { type, payload }) => {
  switch (type) {
    case GET_DATA_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case GET_DATA_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };
    }

    case GET_DATA_ERRORS: {
      return {
        ...state,
        error: true,
      };
    }

    default: {
      return state;
    }
  }
};

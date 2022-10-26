import {
  GET_JOKE_PENDING,
  GET_JOKE_FULFILLED,
  GET_JOKE_REJECTED
} from "../constants/joke";

const initialState = {
  pending: false,
  data: {},
  error: false
}

export const joke = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOKE_PENDING:
      return {
        ...state,
        pending: true,
        error: {},
        data: {}
      }
    case GET_JOKE_FULFILLED:
      return {
        ...state,
        pending: false,
        error: false,
        data: action.data
      }
    case GET_JOKE_REJECTED:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    default:
      return state
  }
}

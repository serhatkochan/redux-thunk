import axios from "services/axios/api";
import {
  GET_JOKE_PENDING,
  GET_JOKE_FULFILLED,
  GET_JOKE_REJECTED
} from "../constants/joke";

const getJokePending = () => ({
  type: GET_JOKE_PENDING
})

const getJokeFulfilled = (data) => ({
  type: GET_JOKE_FULFILLED,
  data
})

const getJokeRejected = (error) => ({
  type: GET_JOKE_REJECTED,
  error
})

export const getJoke = () => (dispatch) => {
  dispatch(getJokePending());
  axios.get('v2.jokeapi.dev/joke/Any?blacklistFlags=religious&type=single').then((res) => {
    if (res) {
      dispatch(getJokeFulfilled(res.data));
    } else {
      dispatch(getJokeRejected(null));
    }
  }).catch((error) => {
    dispatch(getJokeRejected(error));
  })
}

import {ADD_PASSWORD} from './passwordTypes'

export const addPassword = (payload) => ({
  type: ADD_PASSWORD,
  payload: payload,
});


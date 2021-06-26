import { ADD_PASSWORD, REMOVE_PASSWORD } from './passwordTypes';

export const addPassword = (payload) => ({
  type: ADD_PASSWORD,
  payload: payload,
});

export const removePassword = (id) => ({
  type: REMOVE_PASSWORD,
  payload: id
});



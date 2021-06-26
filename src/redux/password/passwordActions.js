import { ADD_PASSWORD, REMOVE_PASSWORD, EDIT_PASSWORD } from './passwordTypes';

export const addPassword = (payload) => ({
  type: ADD_PASSWORD,
  payload: payload,
});

export const removePassword = (id) => ({
  type: REMOVE_PASSWORD,
  payload: id
});

export const editPassword = (payload) => ({
  type: EDIT_PASSWORD,
  payload: payload
});




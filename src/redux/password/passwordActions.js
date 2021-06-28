import {
  ADD_PASSWORD,
  REMOVE_PASSWORD,
  UPDATE_PASSWORD,
} from './passwordTypes';

export const addPassword = (payload) => ({
  type: ADD_PASSWORD,
  payload: payload,
});


export const removePassword = (id) => ({
  type: REMOVE_PASSWORD,
  payload: id,
});

export const updatePassword = (payload) => ({
  type: UPDATE_PASSWORD,
  payload: payload,
});


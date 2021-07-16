import {
  ADD_PASSWORD,
  REMOVE_PASSWORD,
  UPDATE_PASSWORD,
  SELECT_PASSWORD,
  CLEAR_SELECTED_PASSWORD,
  DELETE_SELECTED_PASSWORD,
} from './passwordTypes';

export const addPassword = (payload:object) => ({
  type: ADD_PASSWORD,
  payload: payload,
});

export const removePassword = (id:number) => ({
  type: REMOVE_PASSWORD,
  payload: id,
});

export const updatePassword = (payload:object) => ({
  type: UPDATE_PASSWORD,
  payload: payload,
});

export const selectPasswords = (id:number) => ({
  type: SELECT_PASSWORD,
  payload: id,
});

export const clearSelectedPasswords = () => ({
  type: CLEAR_SELECTED_PASSWORD,
});

export const deleteSelectedPassword = () => ({
  type: DELETE_SELECTED_PASSWORD,
});

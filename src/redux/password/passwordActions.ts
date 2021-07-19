import {
  ADD_PASSWORD,
  REMOVE_PASSWORD,
  UPDATE_PASSWORD,
  SELECT_PASSWORD,
  CLEAR_SELECTED_PASSWORD,
  DELETE_SELECTED_PASSWORD,
} from './passwordTypes';

interface IAddPassword {
  type: string
  payload: object,
}

interface IRemovePassword {
  type: string
  payload: number,
}

interface IUpdatePassword {
  type: string
  payload: object,
}

interface ISelectPasswords {
  type: string,
  payload: number,
}

interface IClearSelectedPasswords {
  type: string,
}

interface  IDeleteSelectedPassword {
  type:string
}

export type Action = IAddPassword | IRemovePassword | IUpdatePassword | ISelectPasswords | IClearSelectedPasswords | IDeleteSelectedPassword

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

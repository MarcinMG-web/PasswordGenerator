import { Types } from './passwordTypes';

interface IAddPassword {
  type: Types.ADD_PASSWORD;
  payload: object;
}

interface IRemovePassword {
  type: Types.REMOVE_PASSWORD;
  payload: number;
}

interface IUpdatePassword {
  type: Types.UPDATE_PASSWORD;
  payload: object;
}

interface ISelectPasswords {
  type: Types.SELECT_PASSWORD;
  payload: number;
}

interface IClearSelectedPasswords {
  type: Types.CLEAR_SELECTED_PASSWORD;
}

interface IDeleteSelectedPassword {
  type: Types.DELETE_SELECTED_PASSWORD;
}

export type Action =
  | IAddPassword
  | IRemovePassword
  | IUpdatePassword
  | ISelectPasswords
  | IClearSelectedPasswords
  | IDeleteSelectedPassword;

export const addPassword = (payload: object): IAddPassword => ({
  type: Types.ADD_PASSWORD,
  payload: payload,
});

export const removePassword = (id: number): IRemovePassword => ({
  type: Types.REMOVE_PASSWORD,
  payload: id,
});

export const updatePassword = (payload: object): IUpdatePassword => ({
  type: Types.UPDATE_PASSWORD,
  payload: payload,
});

export const selectPasswords = (id: number): ISelectPasswords => ({
  type: Types.SELECT_PASSWORD,
  payload: id,
});

export const clearSelectedPasswords = (): IClearSelectedPasswords => ({
  type: Types.CLEAR_SELECTED_PASSWORD,
});

export const deleteSelectedPassword = (): IDeleteSelectedPassword => ({
  type: Types.DELETE_SELECTED_PASSWORD,
});

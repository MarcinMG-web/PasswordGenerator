export interface ISavedPasswordsArrState { 
  savedPasswordsArr: any[]
}

export interface ISelectPasswordArrToRemove{
  selectPasswordArrToRemove: object[]
}

export interface IAddPassword {
  type: string
  payload: object,
}

export interface IRemovePassword {
  type: string
  payload: number,
}

export interface IUpdatePassword {
  type: string
  payload: object,
}

export interface ISelectPasswords {
  type: string,
  payload: number,
}

export interface IClearSelectedPasswords {
  type: string,
}

export interface  IDeleteSelectedPassword {
  type:string
}

export type Action = IAddPassword | IRemovePassword | IUpdatePassword | ISelectPasswords | IClearSelectedPasswords | IDeleteSelectedPassword
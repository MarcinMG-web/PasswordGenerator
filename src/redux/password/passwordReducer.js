import { ADD_PASSWORD } from './passwordTypes';

const initialState = {
  savedPasswordsArr: [],
};

const passwordReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PASSWORD:
      return {
        ...state,
        savedPasswordsArr: [...state.savedPasswordsArr, action.payload],
      };

    default:
      return state;
  }
};

export default passwordReducer;

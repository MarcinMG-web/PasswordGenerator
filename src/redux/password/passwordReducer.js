import { ADD_PASSWORD, REMOVE_PASSWORD } from './passwordTypes';

const initialState = {
  savedPasswordsArr: [
    {
      passwordName: 'qweqwe',
      password: '+1o$1+m%.m!ftb/kn.!-8gv68ccv/l',
      id: 1624701791816,
    },
    {
      passwordName: 'eqweqw',
      password: "iyob'&8iph.!.v8pct-v%7",
      id: 1624701802088,
    },
  ],
};

const passwordReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PASSWORD:
      return {
        ...state,
        savedPasswordsArr: [...state.savedPasswordsArr, action.payload],
      };
    case REMOVE_PASSWORD:
      return {
        ...state,
        // savedPasswordsArr: [...state.savedPasswordsArr, action.payload],
        savedPasswordsArr: [
          ...state.savedPasswordsArr.slice(0, action.payload),
          ...state.savedPasswordsArr.slice(action.payload + 1),
        ],
      };

    default:
      return state;
  }
};

export default passwordReducer;

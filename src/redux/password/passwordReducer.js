import {
  ADD_PASSWORD,
  REMOVE_PASSWORD,
  UPDATE_PASSWORD,
} from './passwordTypes';

const initialState = {
  savedPasswordsArr: [
    {
      passwordName: 'strong password',
      password: 'b/kn.!-8gv68ccv/l',
      id: 1624701791816,
    },
    {
      passwordName: 'good password',
      password: "iyob'&8iph.!.v8pct-v%7",
      id: 1624701802088,
    },
    {
      passwordName: 'easy ',
      password: '12345',
      id: 1624701802084,
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
        savedPasswordsArr: state.savedPasswordsArr.filter(
          (savedPassword) => savedPassword.id !== action.payload
        ),
      };
    case UPDATE_PASSWORD:
      let savedPasswordsArr = [...state.savedPasswordsArr];

      let index = -1;

      for (let i = 0; i < savedPasswordsArr.length; i++) {
        index++;
        if (savedPasswordsArr[i].id === action.payload.id) {
          break;
        }
      }

      if (index !== -1) {
        savedPasswordsArr[index] = action.payload;
        return {
          savedPasswordsArr: [...savedPasswordsArr],
        };
      }
      break;

    default:
      return state;
  }
};

export default passwordReducer;

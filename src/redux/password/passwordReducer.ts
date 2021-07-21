import {
  ADD_PASSWORD,
  REMOVE_PASSWORD,
  UPDATE_PASSWORD,
  SELECT_PASSWORD,
  CLEAR_SELECTED_PASSWORD,
  DELETE_SELECTED_PASSWORD,
} from './passwordTypes';

interface IState {
  savedPasswordsArr: { passwordName: string; password: any; id: number }[];
  selectPasswordArrToRemove: object[];
}

const initialState: IState = {
  savedPasswordsArr: [
    {
      passwordName: 'hard password',
      password: 'fmsX-EKfMf/jTtOXV(TXg5CN/RRnBRa5',
      id: 1624701791816,
    },
    {
      passwordName: 'strong password',
      password: 'aUhKoqNtjpwm7Kvjf593Mg#+A',
      id: 1624701802097,
    },
    {
      passwordName: 'medium password',
      password: "iyob'&#Dsa",
      id: 1624701802088,
    },
    {
      passwordName: 'easy password',
      password: '12345',
      id: 1624701802084,
    },
  ],

  selectPasswordArrToRemove: [],
};

const passwordReducer = (state: IState = initialState, action: any) => {
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
          (savedPassword: any) => savedPassword.id !== action.payload
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

    case SELECT_PASSWORD:
      return {
        ...state,
        selectPasswordArrToRemove: action.payload,
      };

    case CLEAR_SELECTED_PASSWORD:
      return {
        ...state,
        selectPasswordArrToRemove: [],
      };

    case DELETE_SELECTED_PASSWORD: {
      return {
        ...state,
        savedPasswordsArr: [],
        selectPasswordArrToRemove: [],
      };
    }

    default:
      return state;
  }
};

export default passwordReducer;

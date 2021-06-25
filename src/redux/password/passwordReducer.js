import { ADD_PASSWORD } from './passwordTypes'

const initialState = {
    savedPasswords: []
}

const passwordReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_PASSWORD:
            return {
                ...state,
                savedPasswords: action.payload
            };

        default:
            return state;
    }
}


export default passwordReducer;

import Constants from '../Constants';
import { themes } from '../context/Theme';

export const initialState = {
    type: Constants.light,
    ...themes.light
}

export const reducer = (state, action) => {
    if (action.type === 'SAVE') {
        return action.payload;
    } else if (action.type === 'TOGGLE_DARK') {
        let updatedState = {
            ...state,
            type: Constants.dark,
            ...themes.dark
        }
        localStorage.setItem("theme", JSON.stringify(updatedState))
        return updatedState;
    } else if (action.type === 'TOGGLE_LIGHT') {
        let updatedState = {
            ...state,
            type: Constants.light,
            ...themes.light
        }
        localStorage.setItem("theme", JSON.stringify(updatedState))
        return updatedState;
    } else if(action.type === 'CLEAR') {
        return initialState;
    }
    return state;
}
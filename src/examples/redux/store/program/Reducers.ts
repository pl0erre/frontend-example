import {ProgramState, ProgramActionTypes, ADD_MATCH} from './Types';

const initialState: ProgramState = {
    matches: []
};

export function programReducer(state = initialState, action: ProgramActionTypes): ProgramState {
    switch (action.type) {
        case ADD_MATCH:
            const matches = [...state.matches];
            const index = matches.findIndex(match => match.id === action.match.id);
            if (index > -1) {
                matches[index] = action.match;
            } else {
                matches.push(action.match);
            }
            return {
                matches
            };
        default:
            return state;
    }
}

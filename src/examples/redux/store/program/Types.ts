import * as ProgramTypes from '../../../../api/program/Types';
import {ThunkAction} from 'redux-thunk';
import {AppState} from '../';

export interface ProgramState {
    matches: ProgramTypes.Match[];
}

export const ADD_MATCH = 'ADD_MATCH';

interface AddMatchAction {
    type: typeof ADD_MATCH;
    match: ProgramTypes.Match;
}

export type ProgramActionTypes = AddMatchAction;

export type ProgramThunkActionTypes = ThunkAction<void, AppState, undefined, ProgramActionTypes>;

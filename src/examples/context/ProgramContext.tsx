import * as React from 'react';
import * as ProgramTypes from '../../api/program/Types';

export interface ProgramState {
    matches: ProgramTypes.Match[];
    getMatches: () => void;
}

export const ProgramDefaultState: ProgramState = {
    matches: [],
    getMatches: () => {}
};
export const ProgramContext = React.createContext<ProgramState>(ProgramDefaultState);

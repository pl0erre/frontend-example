import * as Matches from './Matches';
import * as ProgramTypes from './Types';

export function getMatches(): Promise<ProgramTypes.Match[]> {
    return Promise.resolve(Object.values(Matches));
}

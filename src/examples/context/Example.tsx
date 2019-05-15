import React from 'react';
import MatchList from './components/MatchList';
import {ProgramContext, ProgramState, ProgramDefaultState} from './ProgramContext';
import * as ProgramAPI from '../../api/program/API';

interface Props {}
type State = ProgramState;

class App extends React.Component<Props, State> {
    state = ProgramDefaultState;

    private getMatches = async () => {
        const matches = await ProgramAPI.getMatches();

        this.setState({
            matches
        });
    };

    public render() {
        return (
            <ProgramContext.Provider value={{matches: this.state.matches, getMatches: this.getMatches}}>
                <MatchList />
            </ProgramContext.Provider>
        );
    }
}

export default App;

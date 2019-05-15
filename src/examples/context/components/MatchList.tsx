import React from 'react';
import MatchList from '../../common/components/MatchList';
import {ProgramContext} from '../ProgramContext';

export const MatchListWithConsumer: React.FC = () => (
    <ProgramContext.Consumer>{state => <MatchList {...state} />}</ProgramContext.Consumer>
);

export const MatchListWithHooks: React.FC = () => {
    const state = React.useContext(ProgramContext);
    return <MatchList {...state} />;
};

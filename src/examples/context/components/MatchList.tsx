import React from 'react';
import MatchList from '../../common/components/MatchList';
import {ProgramContext} from '../ProgramContext';

export default () => <ProgramContext.Consumer>{state => <MatchList {...state} />}</ProgramContext.Consumer>;

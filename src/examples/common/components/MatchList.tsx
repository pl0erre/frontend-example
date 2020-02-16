import React, {useEffect} from 'react';
import * as ProgramTypes from '../../../api/program/Types';
import Match from '../../common/components/Match';
import styled from 'styled-components';

const Container = styled.div``;

const NoMatches = styled.div``;

interface Props {
    matches: ProgramTypes.Match[];
    getMatches: () => void;
}

const MatchList: React.FC<Props> = ({matches, getMatches}) => {
    // update Matchlist every 60 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            getMatches();
        }, 60000);
        // setInterval must be cleared, otherwise it is starting a new interval over and over again
        return () => clearInterval(interval);
    });

    return (
        <Container>
            {matches.length === 0 ? (
                <NoMatches>No matches available</NoMatches>
            ) : (
                matches.map((match: ProgramTypes.Match) => <Match key={match.id} match={match} />)
            )}

            <button onClick={getMatches}>Get/Update Matches</button>
        </Container>
    );
};

export default MatchList;

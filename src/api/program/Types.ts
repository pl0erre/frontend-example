export interface Team {
    id: string;
    label: string;
}

export interface Match {
    id: string;
    country: string;
    league: string;
    begin: number;
    homeTeam: Team;
    awayTeam: Team;
    score?: [number, number];
}

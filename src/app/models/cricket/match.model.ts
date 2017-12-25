export interface Match {
    matchId?: string;
    team1: string;
    team2: string;
    date: Date;
    venue: string;
    overs: number;
    tossWonBy: string;
    tossTeamOptedFor: string;
    noBallRuns: number;
    wideBallRuns: number;
}
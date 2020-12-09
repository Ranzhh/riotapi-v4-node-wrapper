interface ILeagueItemDto {
    freshBlood: boolean;
    wins: number;
    summonerName: string;
    miniSeries: IMiniSeriesDto;
    inactive: boolean;
    veteran: boolean;
    hotStreak: boolean;
    rank: string;
    leaguePoints: number;
    losses: number;

    /** Encrypted Summoner ID of the summoner */
    summonerId: string;
}
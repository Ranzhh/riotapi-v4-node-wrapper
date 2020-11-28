interface ILeagueListDto {
    leagueId: string;
    entries: ILeagueItemDto[];
    tier: string;
    name: string;
    queue: string;
}
interface IParticipantDto {
    /** Participant statistics. */
    stats: IParticipantStatsDto;

    participantId: number;

    /** List of legacy Rune information. Not included for matches played with Runes Reforged. */
    runes: IRuneDto[];

    /** Participant timeline data. */
    timeline: IParticipantTimelineDto;

    /** 100 for blue side. 200 for red side. */
    teamId: number;

    /** Second Summoner Spell id. */
    spell2Id: number;

    /** List of legacy Mastery information. Not included for matches played with Runes Reforged. */
    masteries: IMasteryDto[];

    /** Highest ranked tier achieved for the previous season in a specific subset of queueIds, if any, otherwise null.
     * Used to display border in game loading screen. Please refer to the Ranked Info documentation.
     * (Legal values: CHALLENGER, MASTER, DIAMOND, PLATINUM, GOLD, SILVER, BRONZE, UNRANKED)
     */
    highestAchievedSeasonTier: "CHALLENGER" | "MASTER" | "DIAMOND" | "PLATINUM" | "GOLD" | "SILVER" | "BRONZE" | "UNRANKED";

    /** First Summoner Spell id. */
    spell1Id: number;

    championId: number;
}

interface ICurrentGameParticipant {

    /** The ID of the champion played by this participant */
    championId: number;

    /** Perks/Runes Reforged Information */
    perks: IPerks;

    /** The ID of the profile icon used by this participant */
    profileIconId: number;

    /** Flag indicating whether or not this participant is a bot */
    bot: boolean;

    /** The team ID of this participant, indicating the participant's team */
    teamId: number;

    /** The summoner name of this participant */
    summonerName: string;

    /** The encrypted summoner ID of this participant */
    summonerId: string;

    /** The ID of the first summoner spell used by this participant */
    spell1Id: number;

    /** The ID of the second summoner spell used by this participant */
    spell2Id: number;

    /** List of Game Customizations */
    gameCustomizationObjects: IGameCustomizationObjects[];
}

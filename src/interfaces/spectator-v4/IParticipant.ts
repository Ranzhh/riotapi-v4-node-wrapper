interface IParticipant {
    /** The summoner name of this participant */
    summonerName: string;

    /** The ID of the champion played by this participant */
    championId: number;

    /** The ID of the profile icon used by this participant */
    profileIconId: number

    /** The team ID of this participant, indicating the participant's team */
    teamId: number;

    /** Flag indicating whether or not this participant is a bot */
    bot: boolean;

    /** The ID of the first summoner spell used by this participant */
    spell1Id: number;

    /** The ID of the second summoner spell used by this participant */
    spell2Id: number;


}
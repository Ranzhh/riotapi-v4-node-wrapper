interface ICurrentGameInfo {

    /** The ID of the game */
    gameId: number;

    /** The game type */
    gameType: string;

    /** The game start time represented in epoch milliseconds */
    gameStartTime: number;

    /** The ID of the map */
    mapId: number;

    /** The amount of time in seconds that has passed since the game started */
    gameLength: number;

    /** The ID of the platform on which the game is being played */
    platformId: string;

    /** The game mode */
    gameMode: string;

    /** Banned champion information */
    bannedChampions: IBannedChampion[];

    /** The queue type */
    gameQueueConfigId: number;

    /** The observer information */
    observers: IObserver;

    /** The participant information */
    participants: ICurrentGameParticipant[];
}

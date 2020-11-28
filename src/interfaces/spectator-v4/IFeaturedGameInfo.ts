interface IFeaturedGameInfo {

    /** The game mode */
    gameMode: 'CLASSIC' | 'ODIN' | 'ARAM' | 'TUTORIAL' | 'ONEFORALL' | 'ASCENSION' | 'FIRSTBLOOD' | 'KINGPORO';

    /** The amount of time in seconds that has passed since the game started */
    gameLength: number;

    /** The ID of the map */
    mapId: number;

    /** The game type */
    gameType: 'CUSTOM_GAME' | 'MATCHED_GAME' | 'TUTORIAL_GAME';

    /** Banned champion information */
    bannedChampions: IBannedChampion[];

    /** The ID of the game */
    gameId: number;

    /** The observer information */
    observers: IObserver;

    /** The queue type */
    gameQueueConfigId: number;

    /** The game start time represented in epoch milliseconds */
    gameStartTime: number;

    /** The participant information */
    participants: IParticipant[];

    /** The ID of the platform on which the game is being played */
    platformId: string;
}
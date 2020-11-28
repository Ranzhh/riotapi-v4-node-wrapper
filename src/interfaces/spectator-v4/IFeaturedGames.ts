interface IFeaturedGames {
    /** The list of featured games */
    gameList: IFeaturedGameInfo[];

    /** The suggested interval to wait before requesting FeaturedGames again */
    clientRefreshInterval: number;
}
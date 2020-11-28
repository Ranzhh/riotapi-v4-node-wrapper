import { reject, resolve } from "bluebird";
import { netcall } from "../netcall";

export class SpectatorV4 {
    private key: string;

    constructor(key: string) {
        this.key = key;
    }

    /**
     * Get current game information for the given summoner ID.
     * @link https://developer.riotgames.com/apis#spectator-v4/GET_getCurrentGameInfoBySummoner
     * @param encryptedSummonerId: the encrypted Summoner ID of the summoner
     * @param region - the Region on which the summoner plays.
     * @returns {Promise<ICurrentGameInfo>} Promise of the current game information.
     */
    public async getCurrentGameInfoBySummoner(encryptedSummonerId: string, region: string): Promise<ICurrentGameInfo> {
        return netcall<ICurrentGameInfo>(region, `spectator/v4/active-games/by-summoner/${encryptedSummonerId}`, this.key);
    }

    /**
     * Get info on the current Featured games.
     * @link https://developer.riotgames.com/apis#spectator-v4/GET_getFeaturedGames
     * @param region - the Region for which to gather Featured games data.
     * @returns {Promise<IFeaturedGames>} Promised of the featured games.
     */
    public async getFeaturedGames(region: string): Promise<IFeaturedGames> {
        return netcall<IFeaturedGames>(region, `spectator/v4/featured-games`, this.key);
    }
}

import { reject, resolve } from "bluebird";
import { netcall } from "../netcall";

export class ChampionMasteryV4 {
    private key: string;

    constructor(key: string) {
        this.key = key;
    }

    /**
     * Get status data for a region.
     * @link https://developer.riotgames.com/apis#champion-mastery-v4/GET_getAllChampionMasteries
     * @param encryptedSummonerId - the encrypted summoner ID of the summoner.
     * @param region - the Region on which the summoner plays.
     * @returns {Promise<IChampionMasteryDto[]>} Promise of a List the champion mastery data..
     */
    public async getAllChampionMasteries(encryptedSummonerId: string, region: string): Promise<IChampionMasteryDto[]> {
        return netcall<IChampionMasteryDto[]>(region, `champion-mastery/v4/champion-masteries/by-summoner/${encryptedSummonerId}`, this.key);
    }
}

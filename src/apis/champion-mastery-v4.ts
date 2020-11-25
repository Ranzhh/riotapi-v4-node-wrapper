import { reject, resolve } from "bluebird";
import { netcall } from "../netcall";

export class ChampionMasteryV4 {
    private key: string;

    constructor(key: string) {
        this.key = key;
    }

    /**
     * Get all champion mastery entries sorted by number of champion points descending.
     * @link https://developer.riotgames.com/apis#champion-mastery-v4/GET_getAllChampionMasteries
     * @param encryptedSummonerId - the encrypted summoner ID of the summoner.
     * @param region - the Region on which the summoner plays.
     * @returns {Promise<IChampionMasteryDto[]>} Promise of a List of the champion mastery data.
     */
    public async getAllChampionMasteries(encryptedSummonerId: string, region: string): Promise<IChampionMasteryDto[]> {
        return netcall<IChampionMasteryDto[]>(region, `champion-mastery/v4/champion-masteries/by-summoner/${encryptedSummonerId}`, this.key);
    }

    /**
     * Get a champion mastery by player ID and champion ID.
     * @link https://developer.riotgames.com/apis#champion-mastery-v4/GET_getChampionMastery
     * @param encryptedSummonerId - the encrypted summoner ID of the summoner.
     * @param championId - the ID of the champion.
     * @param region - the Region on which the summoner plays.
     * @returns {Promise<IChampionMasteryDto>} Promise of the champion mastery data.
     */
    public async getChampionMastery(encryptedSummonerId: string, championId: number, region: string): Promise<IChampionMasteryDto> {
        return netcall<IChampionMasteryDto>(region, `champion-mastery/v4/champion-masteries/by-summoner/${encryptedSummonerId}/by-champion/${championId}`, this.key);
    }

    /** Get a player's total champion mastery score, which is the sum of individual champion mastery levels.
     * @link https://developer.riotgames.com/apis#champion-mastery-v4/GET_getChampionMasteryScore
     * @param encryptedSummonerId - the encrypted summoner ID of the summoner.
     * @param region - the Region on which the summoner plays.
     * @returns {Promise<number>} Promise of the total score.
     */
    public async getChampionMasteryScore(encryptedSummonerId: string, region: string): Promise<number> {
        return netcall<number>(region, `champion-mastery/v4/scores/by-summoner/${encryptedSummonerId}`, this.key);
    }
}

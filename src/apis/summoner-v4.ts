import { reject, resolve } from "bluebird";
import { netcall } from "../netcall";

export class SummonerV4 {
    private key: string;

    constructor(key: string) {
        this.key = key;
    }

    /**
     * Get a summoner by account ID.
     * @link https://developer.riotgames.com/apis#summoner-v4/GET_getByAccountId
     * @param encryptedAccountId - the encrypted account ID of the summoner.
     * @param region - the Region on which the summoner plays.
     * @returns {Promise<ISummonerDto>} Promise of the summoner data.
     */
    public async getSummonerByAccountId(encryptedAccountId: string, region: string): Promise<ISummonerDto> {
        return netcall<ISummonerDto>(region, `summoner/v4/summoners/by-account/${encryptedAccountId}`, this.key);
    }

    /**
     * Get a summoner by summoner name.
     * @link https://developer.riotgames.com/apis#summoner-v4/GET_getBySummonerName
     * @param summonerName - the name of the summoner.
     * @param region - the Region on which the summoner plays.
     * @returns {Promise<ISummonerDto>} Promise of the summoner data.
     */
    public async getSummonerByName(summonerName: string, region: string): Promise<ISummonerDto> {
        return netcall<ISummonerDto>(region, `summoner/v4/summoners/by-name/${summonerName}`, this.key);
    }

    /**
     * Get a summoner by PUUID.
     * @link https://developer.riotgames.com/apis#summoner-v4/GET_getByPUUID
     * @param encryptedPUUID - the PUUID of the summoner.
     * @param region - the Region on which the summoner plays.
     * @returns {Promise<ISummonerDto>} Promise of the summoner data.
     */
    public async getSummonerByPUUID(encryptedPUUID: string, region: string): Promise<ISummonerDto> {
        return netcall<ISummonerDto>(region, `summoner/v4/summoners/by-puuid/${encryptedPUUID}`, this.key);
    }

    /**
     * Get a summoner by summoner ID.
     * @link https://developer.riotgames.com/apis#summoner-v4/GET_getBySummonerId
     * @param encryptedSummonerId - the encrypted summoner ID of the summoner.
     * @param region - the Region on which the summoner plays.
     * @returns {Promise<ISummonerDto>} Promise of the summoner data.
     */
    public async getSummonerBySummonerId(encryptedSummonerId: string, region: string): Promise<ISummonerDto> {
        return netcall<ISummonerDto>(region, `summoner/v4/summoners/${encryptedSummonerId}`, this.key);
    }
}

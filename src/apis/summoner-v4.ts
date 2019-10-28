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
        return await netcall(region, `summoner/v4/summoners/by-account/${encryptedAccountId}`, this.key)
            .then((res: ISummonerDto) => resolve(res))
            .catch((err: IRiotApiError) => reject(err));
    }

    /**
     * Get a summoner by summoner name.
     * @link https://developer.riotgames.com/apis#summoner-v4/GET_getBySummonerName
     * @param summonerName - the name of the summoner.
     * @param region - the Region on which the summoner plays.
     * @returns {Promise<ISummonerDto>} Promise of the summoner data.
     */
    public async getSummonerByName(summonerName: string, region: string): Promise<ISummonerDto> {
        return await netcall(region, `summoner/v4/summoners/by-name/${summonerName}`, this.key)
            .then((res: ISummonerDto) => resolve(res))
            .catch((err: IRiotApiError) => reject(err));
    }
}

import { reject, resolve } from "bluebird";
import { netcall } from "../netcall";

export class LeagueV4 {
    private key: string;

    constructor(key: string) {
        this.key = key;
    }

    /**
     * Get the challenger league for given queue.
     * @link https://developer.riotgames.com/apis#league-v4/GET_getChallengerLeague
     * @param queue - the queue (ranked solo, flex, TT) for which to gather league data.
     * @param region - the Region for which to gather league data.
     * @returns {Promise<IPlatformDataDto>} Promise of the league data.
     */
    public async getChallengerLeague(queue: "RANKED_SOLO_5x5" | "RANKED_FLEX_SR" | "RANKED_FLEX_TT", region: string): Promise<ILeagueListDto> {
        return netcall<ILeagueListDto>(region, `league/v4/challengerleagues/by-queue/${queue}`, this.key);
    }
}

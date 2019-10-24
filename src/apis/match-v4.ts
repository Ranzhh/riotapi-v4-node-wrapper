import { reject, resolve } from "bluebird";
import { netcall } from "../netcall";

export class MatchV4 {
    private key: string;

    constructor(key: string) {
        this.key = key;
    }

    /**
     * Get match by match ID.
     * @link https://developer.riotgames.com/api-methods/#match-v4/GET_getMatch
     * @param matchID - the Match ID of the game.
     * @param region - the Region on which the match was played.
     * @returns {Promise<IMatchDto>} Promise of the match data for the game.
     */
    public async getMatch(matchID: string, region: string): Promise<IMatchDto> {
        return await netcall(region, `match/v4/matches/${matchID}`, this.key)
        .then((res: IMatchDto) => resolve(res))
        .catch((err: IRiotApiError) => reject(err));
    }
}

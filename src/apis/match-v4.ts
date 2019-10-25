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

    /**
     * Get matchlist for games played on given account ID and platform ID filtered using given parameters, if any.
     * @link https://developer.riotgames.com/api-methods/#match-v4/GET_getMatchlist
     * @param encryptedAccountID - the encrypted Account ID of the summoner.
     * @param region - the Region on which the summoner plays.
     * @param options - the MatchListOptions for the query.
     */
    public async getMatchlist(encryptedAccountID: string, region: string, options?: IMatchlistOptions): Promise<IMatchlistDto> {
        const currentOptions = [];

        if (options) {
            if (options.champion) {
                currentOptions.push(`champion=${options.champion}`);
            }
            if (options.queue) {
                currentOptions.push(`queue=${options.queue}`);
            }
            if (options.season) {
                currentOptions.push(`season=${options.season}`);
            }
            if (options.endTime) {
                currentOptions.push(`endTime=${options.endTime}`);
            }
            if (options.beginTime) {
                currentOptions.push(`beginTime=${options.beginTime}`);
            }
            if (options.endIndex) {
                currentOptions.push(`endIndex=${options.endIndex}`);
            }
            if (options.beginIndex) {
                currentOptions.push(`beginIndex=${options.beginIndex}`);
            }
        }

        let optionsString = "";

        for (let i = 0; i < currentOptions.length; i++) {
            if (i === 0) {
                optionsString += "?";
            } else {
                optionsString += "&";
            }

            optionsString += currentOptions[i];
        }

        return await netcall(region, `match/v4/matchlists/by-account/${encryptedAccountID}${optionsString}`, this.key)
            .then((res: IMatchlistDto) => resolve(res))
            .catch((err: IRiotApiError) => reject(err));
    }

    /**
     * Get match IDs by tournament code.
     * @link https://developer.riotgames.com/apis#match-v4/GET_getMatchIdsByTournamentCode
     * @param tournamentCode - the Tournament Code of the tournament.
     * @param region - the Region on which the tournament was hosted.
     * @returns {Promise<IMatchDto>} Promise of the match data for the game.
     */
    public async getMatchIdsByTournamentCode(tournamentCode: string, region: string): Promise<number[]> {
        return await netcall(region, `match/v4/matches/by-tournament-code/${tournamentCode}/ids`, this.key)
            .then((res: number[]) => resolve(res))
            .catch((err: IRiotApiError) => reject(err));
    }
}

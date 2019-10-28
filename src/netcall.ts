import { reject, resolve } from "bluebird";
import rp from "request-promise";

export const netcall = async<T> (region: string, endpoint: string, key: string): Promise<T> => {
    const options = {
        headers: {
            "User-Agent": "Request-Promise",
            "X-Riot-Token": key,
        },
        json: true,
        uri: `https://${region}.api.riotgames.com/lol/${endpoint}`,
    };

    return rp(options);
};

import { reject, resolve } from "bluebird";
import rp from "request-promise";

export const netcall = async (region: string, endpoint: string, key: string): Promise<{}> => {
    const options = {
        headers: {
            "User-Agent": "Request-Promise",
            "X-Riot-Token": key,
        },
        json: true,
        uri: `https://${region}.api.riotgames.com/lol/${endpoint}`,
    };

    const data = await rp(options).then((res: {}) => resolve(res)).catch((err: IRiotApiError) => reject(err));
    return data;
};

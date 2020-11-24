import { reject, resolve } from "bluebird";
import { netcall } from "../netcall";

export class StatusV4 {
    private key: string;

    constructor(key: string) {
        this.key = key;
    }

    /**
     * Get status data for a region.
     * @link https://developer.riotgames.com/apis#lol-status-v4/GET_getPlatformData
     * @param region - the Region for which to gather status data.
     * @returns {Promise<IPlatformDataDto>} Promise of the platform status data.
     */
    public async getPlatformData(region: string): Promise<IPlatformDataDto> {
        return netcall<IPlatformDataDto>(region, `status/v4/platform-data`, this.key);
    }
}

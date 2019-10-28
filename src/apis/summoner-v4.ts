import { reject, resolve } from "bluebird";
import { netcall } from "../netcall";

export class SummonerV4 {
    private key: string;

    constructor(key: string) {
        this.key = key;
    }
}

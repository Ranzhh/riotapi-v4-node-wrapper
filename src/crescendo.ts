import { MatchV4 } from "./apis/match-v4";
import { SummonerV4 } from "./apis/summoner-v4";

export default class Crescendo {
    public matchV4: MatchV4;
    public summonerV4: SummonerV4;
    private key: string;

    constructor(key: string) {
        this.key = key;
        this.matchV4 = new MatchV4(key);
        this.summonerV4 = new SummonerV4(key);
    }
}
